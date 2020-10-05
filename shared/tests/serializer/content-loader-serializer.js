export function test(value) {
  return (value && typeof value === 'string' && /url\(/.test(value)) || /-aria$/.test(value) || /-diff$/.test(value);
}

export function print(value, serialize) {
  if (/-aria$/.test(value)) {
    value = 'TITLE_ARIA_ID';
  }

  value = value.replace(/url\((.*)\)/, 'STYLE-URL');

  if (/-diff$/.test(value)) {
    value = 'DIFF_ID';
  }

  return serialize(value);
}
