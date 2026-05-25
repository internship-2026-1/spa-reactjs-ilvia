import { API_BASE_URL } from "../config";

class ApiService {

  static instance;

  static getInstance() {

    if (!ApiService.instance) {
      ApiService.instance = new ApiService();
    }

    return ApiService.instance;

  }

  // =========================
  // HEADERS GENERALES
  // =========================

  getDefaultHeaders() {

    const token =
      sessionStorage.getItem("jwt");

    return {

      "Content-Type":
        "application/json",

      "x-api-key":
        import.meta.env.VITE_API_KEY ?? "",

      "x-origin":
        import.meta.env.VITE_APP_ORIGIN
        ?? window.location.origin,

      ...(token
        ? {
            Authorization:
              `Bearer ${token}`,
          }
        : {}),

    };

  }

  // =========================
  // CONSTRUIR URL
  // =========================

  buildUrl(endpoint) {

    // SI YA ES URL COMPLETA
    if (/^https?:\/\//.test(endpoint)) {
      return endpoint;
    }

    const baseUrl =
      API_BASE_URL?.replace(/\/$/, "")
      ?? "";

    const path =
      endpoint.startsWith("/")
        ? endpoint
        : `/${endpoint}`;

    return `${baseUrl}${path}`;

  }

  // =========================
  // GET
  // =========================

async get(endpoint, options = {}) {

  const headers = {

    ...this.getDefaultHeaders(),

    ...(options.headers ?? {}),

  };

  console.log(
    "GET HEADERS:",
    headers
  );

  const response = await fetch(

    this.buildUrl(endpoint),

    {

      method: "GET",

      headers,

    }

  );

  const data =
    await response.json();

  console.log(
    "GET RESPONSE:",
    data
  );

  if (!response.ok) {

    throw new Error(
      JSON.stringify(data)
    );

  }

  return data;

}

  // =========================
  // POST
  // =========================

  async post(endpoint, body, options = {}) {

    console.log(
      "BODY:",
      body
    );

    console.log(
      "HEADERS:",
      this.getDefaultHeaders()
    );

    const response = await fetch(
      this.buildUrl(endpoint),
      {
        method: "POST",

        headers: {
          ...this.getDefaultHeaders(),
          ...(options.headers ?? {}),
        },

        body: JSON.stringify(body),

        ...options,
      }
    );

    const data =
      await response.text();

    console.log(
      "BACKEND:",
      data
    );

    if (!response.ok) {

      throw new Error(data);

    }

    return JSON.parse(data);

  }

  // =========================
  // PUT
  // =========================

  async put(endpoint, body, options = {}) {

    const response = await fetch(
      this.buildUrl(endpoint),
      {
        method: "PUT",

        headers: {
          ...this.getDefaultHeaders(),
          ...(options.headers ?? {}),
        },

        body: JSON.stringify(body),

        ...options,
      }
    );

    const data =
      await response.json();

    console.log(
      "PUT RESPONSE:",
      data
    );

    if (!response.ok) {

      throw new Error(
        JSON.stringify(data)
      );

    }

    return data;

  }

  // =========================
  // DELETE
  // =========================

  async delete(endpoint, options = {}) {

    const response = await fetch(
      this.buildUrl(endpoint),
      {
        method: "DELETE",

        headers: {
          ...this.getDefaultHeaders(),
          ...(options.headers ?? {}),
        },

        ...options,
      }
    );

    const data =
      await response.json();

    console.log(
      "DELETE RESPONSE:",
      data
    );

    if (!response.ok) {

      throw new Error(
        JSON.stringify(data)
      );

    }

    return data;

  }

}

export const apiService =
  ApiService.getInstance();