class StorageService {
static NAMESPACE = 'spa-reactjs-ilvia';

  constructor(storage) {
    this.storage = storage;
  }

  buildKey(key) {
    if (typeof key !== 'string' || !key) {
      throw new Error('Storage key must be a non-empty string.');
    }

    return `${StorageService.NAMESPACE}:${key}`;
  }

  set(key, value) {
    try {
      const storageKey = this.buildKey(key);
      const payload = value === undefined ? null : JSON.stringify(value);

      this.storage.setItem(storageKey, payload);
      return true;
    } catch (error) {
      return false;
    }
  }

  get(key, fallback = null) {
    try {
      const item = this.storage.getItem(this.buildKey(key));

      if (item === null) {
        return fallback;
      }

      return JSON.parse(item);
    } catch (error) {
      return fallback;
    }
  }

  remove(key) {
    try {
      this.storage.removeItem(this.buildKey(key));
    } catch (error) {
      // No romper la aplicación
    }
  }

  clearAppData() {
    try {
      const keysToRemove = [];

      for (let i = 0; i < this.storage.length; i += 1) {
        const currentKey = this.storage.key(i);

        if (
          typeof currentKey === 'string' &&
          currentKey.startsWith(`${StorageService.NAMESPACE}:`)
        ) {
          keysToRemove.push(currentKey);
        }
      }

      keysToRemove.forEach((key) => this.storage.removeItem(key));
    } catch (error) {
      // No romper la aplicación
    }
  }
}

export default StorageService;