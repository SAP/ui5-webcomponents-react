export function defaultMeasuresFormatter(value: number) {
  /**
   * Locale is forced to `en` to standardize values in all tests and avoid
   * snapshots too fail if the test runs in a computer with a different number format
   */
  return value.toLocaleString('en');
}
