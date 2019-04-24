/**
 * Created by d059190 at 16.03.18
 */
import 'tslib';

class StyleClassHelper extends String {
  private classes: string[] = [];

  constructor(...classes: string[]) {
    super();
    this.classes = [...classes];
  }

  put(...clazz: string[]) {
    this.classes.push(...clazz);
    return this;
  }

  valueOf() {
    return this.classes.join(' ');
  }

  toString() {
    return this.valueOf();
  }

  static of(...classes: string[]) {
    return new StyleClassHelper().put(...classes);
  }
}

export default StyleClassHelper;
