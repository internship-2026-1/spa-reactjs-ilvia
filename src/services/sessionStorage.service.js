import StorageService from './storage.service';

const safeSessionStorage = (() => {
  try {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      return window.sessionStorage;
    }
  } catch (error) {
    // SSR or browser storage unavailable.
  }

  return {
    getItem: () => null,
    setItem: () => {},
    removeItem: () => {},
    key: () => null,
    clear: () => {},
    get length() {
      return 0;
    },
  };
})();

export class SessionStorageService extends StorageService {
  static instance = null;

  static getInstance() {
    if (!SessionStorageService.instance) {
      SessionStorageService.instance = new SessionStorageService();
    }
    return SessionStorageService.instance;
  }

  constructor() {
    super(safeSessionStorage);
  }
}

const sessionStorageService = SessionStorageService.getInstance();

export default sessionStorageService;
