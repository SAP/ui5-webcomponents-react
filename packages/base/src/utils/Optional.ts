/* eslint-disable id-blacklist */
/**
 * Optionals for Javascript Objects
 * Inspired by Java Optionals
 */
class Optional {
  private readonly object: object;
  private path: string;

  /**
   * Creates a new Optional
   * @param {Object} object The Object to validate
   * @param {String} path Path to search for in object. Separated by dots.
   *                      Example: 'foo.bar'
   * @constructor
   */
  constructor(object: object, path: string) {
    this.object = object;
    this.path = path;
  }

  /**
   * Creates a new Optional
   * @param {Object} object The Object to validate
   * @param {String} path Path to search for in object. Separated by dots.
   *                      Example: 'foo.bar'
   * @constructor
   */
  static of(object: object, path: string) {
    return new Optional(object, path);
  }

  /**
   * Get The Value of the Optional.
   * Do not use the this method directly!
   * @return {any} Resolved Value
   * @private
   */
  get() {
    return this.path.split('.').reduce((acc, val) => {
      if (acc === undefined || acc === null) {
        return acc;
      }
      if (acc.hasOwnProperty(val)) {
        const newVal = acc[val];
        if (newVal !== undefined && newVal !== null) {
          return newVal;
        }
        return newVal;
      }
      return undefined;
    }, this.object);
  }

  /**
   * Return true if there is a value present, otherwise false.
   * @returns {Boolean} true if there is a value present, otherwise false
   */
  isPresent() {
    let obj: any = this.object;
    return this.path.split('.').every((x) => {
      if (typeof obj !== 'object' || obj === null || obj === undefined || !(x in obj)) return false;
      obj = obj[x];
      return true;
    });
  }

  /**
   * If a value is present, invoke the specified consumer with the value, otherwise do nothing.
   * @param {Function} fn block to be executed if a value is present
   * @returns {any} value The executed fn if present, else null
   */
  ifPresent(fn: (value: any) => void) {
    if (this.isPresent()) {
      return fn(this.get());
    }
    return null;
  }

  /**
   * Return the value if present, otherwise return other.
   * @param val {any} the value to be returned if there is no value present, may be null
   * @returns {any} value the value, if present, otherwise other
   */
  orElse(val: any) {
    return this.isPresent() ? this.get() : val;
  }

  /**
   * Return the contained value, if present, otherwise throw an exception to be created by the provided supplier.
   * @param {ExceptionSupplier} exceptionSupplier The supplier which will return the exception to be thrown
   * @returns {any} the present value
   * @throws {Exception} ex - if there is no value present
   *
   */
  orElseThrow(exceptionSupplier: () => Error) {
    if (!this.isPresent()) {
      throw exceptionSupplier();
    }
    return this.get();
  }
}

export { Optional };
