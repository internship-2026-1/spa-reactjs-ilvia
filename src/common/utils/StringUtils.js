class StringUtils {
  static capitalize(value) {
    if (typeof value !== 'string') {
      return '';
    }

    const trimmed = value.trim();
    if (!trimmed) {
      return '';
    }

    return trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase();
  }

  static toTitleCase(value) {
    if (typeof value !== 'string') {
      return '';
    }

    return value
      .trim()
      .split(/\s+/)
      .map((word) => StringUtils.capitalize(word))
      .filter(Boolean)
      .join(' ');
  }

  static truncate(value, max, suffix = '...') {
    if (typeof value !== 'string') {
      return '';
    }

    const length = Number.isFinite(max) ? Math.max(0, max) : 0;
    const text = value;
    const suffixText = typeof suffix === 'string' ? suffix : String(suffix);

    if (length === 0 || text.length <= length) {
      return text;
    }
    return text.slice(0, length) + suffixText;
  }

  static normalizeSpaces(value) {
    if (typeof value !== 'string') {
      return '';
    }

    return value.replace(/\s+/g, ' ').trim();
  }
}

export default StringUtils;
