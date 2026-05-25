class UrlUtils {
  static buildQuery(params) {
    if (!params || typeof params !== 'object') {
      return '';
    }

    const entries = Object.entries(params).flatMap(([key, value]) => {
      if (value === null || value === undefined) {
        return [];
      }

      if (Array.isArray(value)) {
        return value.map((item) => `${encodeURIComponent(key)}=${encodeURIComponent(String(item))}`);
      }

      return `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`;
    });

    return entries.join('&');
  }

  static parseQuery(search) {
    if (typeof search !== 'string' || !search) {
      return {};
    }

    const query = search.startsWith('?') ? search.slice(1) : search;
    const params = new URLSearchParams(query);
    const result = {};

    for (const [key, value] of params.entries()) {
      if (result[key] === undefined) {
        result[key] = value;
      } else if (Array.isArray(result[key])) {
        result[key].push(value);
      } else {
        result[key] = [result[key], value];
      }
    }

    return result;
  }

  static join(base, path) {
    if (typeof base !== 'string' || typeof path !== 'string') {
      return '';
    }
    
    const trimmedBase = base.replace(/\/+$/, '');
    const trimmedPath = path.replace(/^\/+/, '');

    if (!trimmedBase) {
      return trimmedPath;
    }

    if (!trimmedPath) {
      return trimmedBase;
    }

    return `${trimmedBase}/${trimmedPath}`;
  }

  static withQuery(url, params) {
    if (typeof url !== 'string' || !url) {
      return '';
    }

    const [urlWithoutHash, hash] = url.split('#');
    const [base, queryPart] = urlWithoutHash.split('?');
    const existing = UrlUtils.parseQuery(queryPart || '');
    const merged = { ...existing, ...(params || {}) };
    const query = UrlUtils.buildQuery(merged);
    const result = query ? `${base}?${query}` : base;

    return hash ? `${result}#${hash}` : result;
  }
}

export default UrlUtils;
