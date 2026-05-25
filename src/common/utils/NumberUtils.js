class NumberUtils {
  static formatCurrency(value, currency = 'GTQ', locale = 'es-GT') {
    const number = Number(value);
    if (!Number.isFinite(number)) {
      return '';
    }

    try {
      return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency,
      }).format(number);
    } catch (error) {
      return '';
    }
  }

  static formatPercent(value, decimals = 0, locale = 'es-GT') {
    const number = Number(value);
    if (!Number.isFinite(number)) {
      return '';
    }

    const digits = Number.isInteger(decimals) ? decimals : 0;
    try {
      return new Intl.NumberFormat(locale, {
        style: 'percent',
        minimumFractionDigits: digits,
        maximumFractionDigits: digits,
      }).format(number);
    } catch (error) {
      return '';
    }
  }

  static round(value, decimals = 0) {
    const number = Number(value);
    if (!Number.isFinite(number)) {
      return 0;
    }

    const precision = Number.isInteger(decimals) ? decimals : 0;
    const factor = 10 ** precision;
    return Math.round(number * factor) / factor;
  }
}

export default NumberUtils;