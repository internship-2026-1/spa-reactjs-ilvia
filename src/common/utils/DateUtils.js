class DateUtils {
  static parseDate(date) {
    if (date instanceof Date) {
      return date;
    }

    if (typeof date === 'number' || typeof date === 'string') {
      const result = new Date(date);
      return Number.isNaN(result.getTime()) ? null : result;
    }

    return null;
  }

  static format(date, locale = 'default', options = {}) {
    const parsed = DateUtils.parseDate(date);
    if (!parsed) {
      return '';
    }

    try {
      return new Intl.DateTimeFormat(locale, options).format(parsed);
    } catch (error) {
      return '';
    }
  }

  static isValid(date) {
    return Boolean(DateUtils.parseDate(date));
  }

  static toIso(date) {
    const parsed = DateUtils.parseDate(date);
    return parsed ? parsed.toISOString() : '';
  }

  static isBefore(a, b) {
    const first = DateUtils.parseDate(a);
    const second = DateUtils.parseDate(b);
    if (!first || !second) {
      return false;
    }

    return first.getTime() < second.getTime();
  }

  static isAfter(a, b) {
    const first = DateUtils.parseDate(a);
    const second = DateUtils.parseDate(b);
    if (!first || !second) {
      return false;
    }

    return first.getTime() > second.getTime();
  }
}

export default DateUtils;
