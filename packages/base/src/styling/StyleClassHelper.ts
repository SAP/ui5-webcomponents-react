/**
 * Created by d059190 at 16.03.18
 */

class StyleClassHelper {
  private classes: string[] = [];

  constructor(...classes: string[]) {
    this.classes = [...classes];
  }

  put(...clazz: string[]): StyleClassHelper {
    this.classes.push(...clazz);
    return this;
  }

  putIfPresent(...clazzes: (string | null | undefined)[]): StyleClassHelper {
    for (const clazz of clazzes) {
      if (clazz) {
        this.classes.push(clazz);
      }
    }
    return this;
  }

  valueOf(): string {
    return this.className;
  }

  toString(): string {
    return this.className;
  }

  get className(): string {
    return this.classes.join(' ');
  }

  static of(...classes: string[]): StyleClassHelper {
    return new StyleClassHelper().put(...classes);
  }
}

export { StyleClassHelper };
