import StorageService from './storage.service';

const safeLocalStorage = (() => {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      return window.localStorage;
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

export class LocalStorageService extends StorageService {
  static instance = null;

  static getInstance() {
    if (!LocalStorageService.instance) {
      LocalStorageService.instance = new LocalStorageService();
    }
    return LocalStorageService.instance;
  }

  constructor() {
    super(safeLocalStorage);
  }
}

const localStorageService = LocalStorageService.getInstance();

export default localStorageService;
