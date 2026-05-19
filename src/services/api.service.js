import { env } from '../config/env';
import sessionStorageService from './sessionStorage.service';

class ApiService {
  static instance = null;

  static getInstance() {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService();
    }
    return ApiService.instance;
  }

  constructor() {
    this.baseURL = (env.API_BASE_URL || '').replace(/\/+$/, '');
    this.timeout = Number(env.API_TIMEOUT) || 10000;
  }

  buildKey(key) {
    return key.startsWith('/') ? key.slice(1) : key;
  }

  buildUrl(endpoint, query) {
    const value = endpoint || '';
    const isAbsolute = /^(https?:)?\/\//i.test(value);
    const url = isAbsolute
      ? value
      : `${this.baseURL}/${this.buildKey(value)}`.replace(/\/+$/, '');

    if (!query || typeof query !== 'object') {
      return url;
    }

    const queryString = Object.entries(query)
      .flatMap(([key, value]) => {
        if (value === null || value === undefined) {
          return [];
        }

        if (Array.isArray(value)) {
          return value.map((item) => `${encodeURIComponent(key)}=${encodeURIComponent(String(item))}`);
        }

        return `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`;
      })
      .join('&');

    return queryString ? `${url}?${queryString}` : url;
  }

  getAuthHeaders() {
    const headers = {};

    if (env.API_KEY) {
      headers['x-api-key'] = env.API_KEY;
    }

    if (env.ORIGIN) {
      headers.Origin = env.ORIGIN;
    }

    try {
      const token = sessionStorageService.get('token');
      if (token) {
        headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      // No romper la aplicación si la lectura de sesión falla.
    }

    return headers;
  }

  async parseResponse(response) {
    const result = {
      ok: response.ok,
      status: response.status,
      data: null,
      error: null,
    };

    try {
      const text = await response.text();
      if (!text) {
        return result;
      }

      try {
        result.data = JSON.parse(text);
      } catch {
        result.data = text;
      }

      if (!response.ok && !result.error) {
        result.error = typeof result.data === 'string' ? result.data : response.statusText || 'Request failed';
      }
    } catch (error) {
      result.error = String(error);
    }

    return result;
  }

  async request(method, endpoint, { body, headers = {}, query, signal, ...options } = {}) {
    const url = this.buildUrl(endpoint, query);
    const defaultHeaders = this.getAuthHeaders();
    const requestHeaders = { ...defaultHeaders, ...headers };

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeout);

    if (signal) {
      signal.addEventListener('abort', () => controller.abort(), { once: true });
    }

    const config = {
      method,
      headers: requestHeaders,
      signal: controller.signal,
      ...options,
    };

    if (body !== undefined && body !== null && method !== 'GET') {
      config.headers = {
        'Content-Type': 'application/json',
        ...config.headers,
      };
      config.body = JSON.stringify(body);
    }

    try {
      const response = await fetch(url, config);
      const result = await this.parseResponse(response);

      if (!response.ok && !result.error) {
        result.error = response.statusText || 'Request failed';
      }

      return result;
    } catch (error) {
      return {
        ok: false,
        status: 0,
        data: null,
        error: error.name === 'AbortError' ? 'Request timeout' : String(error),
      };
    } finally {
      clearTimeout(timeoutId);
    }
  }

  get(endpoint, config = {}) {
    return this.request('GET', endpoint, config);
  }

  post(endpoint, config = {}) {
    return this.request('POST', endpoint, config);
  }

  put(endpoint, config = {}) {
    return this.request('PUT', endpoint, config);
  }

  patch(endpoint, config = {}) {
    return this.request('PATCH', endpoint, config);
  }

  delete(endpoint, config = {}) {
    return this.request('DELETE', endpoint, config);
  }
}

const apiService = ApiService.getInstance();
export { ApiService, apiService };
export default apiService;
