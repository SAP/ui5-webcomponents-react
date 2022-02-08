module.exports = {
  test(value) {
    if (value && typeof value === 'string') {
      return /url\(/.test(value) || /-aria$/.test(value) || /-diff$/.test(value);
    }
    return false;
  },

  print(value, serialize) {
    if (/-aria$/.test(value)) {
      value = 'TITLE_ARIA_ID';
    }

    value = value.replace(/url\((.*)\)/, 'STYLE-URL');

    if (/-diff$/.test(value)) {
      value = 'DIFF_ID';
    }

    return serialize(value);
  }
};
