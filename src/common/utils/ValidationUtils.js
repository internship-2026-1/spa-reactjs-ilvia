class ValidationUtils {
  static isRequired(value) {
    if (value === null || value === undefined) {
      return false;
    }

    if (typeof value === 'string') {
      return value.trim().length > 0;
    }

    if (Array.isArray(value)) {
      return value.length > 0;
    }

    if (typeof value === 'object') {
      return Object.keys(value).length > 0;
    }

    return true;
  }

  static isEmail(value) {
    if (typeof value !== 'string') {
      return false;
    }

    const trimmed = value.trim();
    if (!trimmed) {
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(trimmed);
  }

  static minLength(value, min) {
    const length = Number.isFinite(min) ? Number(min) : null;
    if (length === null || length < 0) {
      return false;
    }

    if (typeof value === 'string') {
      return value.trim().length >= length;
    }

    if (Array.isArray(value)) {
      return value.length >= length;
    }

    return false;
  }

  static maxLength(value, max) {
    const length = Number.isFinite(max) ? Number(max) : null;
    if (length === null || length < 0) {
      return false;
    }

    if (typeof value === 'string') {
      return value.trim().length <= length;
    }

    if (Array.isArray(value)) {
      return value.length <= length;
    }

    return false;
  }

  static isPhone(value) {
    if (typeof value !== 'string') {
      return false;
    }

    const cleaned = value.replace(/[^\d+]/g, '');
    return cleaned.length >= 7 && cleaned.length <= 15;
  }
}

export default ValidationUtils;
