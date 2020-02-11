export class HSLColor {
  private static HSL_REGEX = /(\d{0,3}\.?\d*?), ?(\d{0,3}\.?\d*?)%?, ?(\d{0,3}\.?\d*?)%?/;
  private static HEX_REGEX = /^#([a-f\d]{1,2})([a-f\d]{1,2})([a-f\d]{1,2})$/i;

  private hue: number;
  private saturation: number;
  private lightness: number;
  private alpha = 1;

  constructor(hue: number, saturation: number, lightness: number, alpha = 1) {
    this.hue = hue;
    this.saturation = saturation;
    this.lightness = lightness;
    this.alpha = alpha;
  }

  static of(hue: number | string | HSLColor, saturation?: number, lightness?: number, alpha?: number): HSLColor {
    if (typeof hue === 'string' && HSLColor.HSL_REGEX.test(hue)) {
      return HSLColor.fromHsl(hue);
    }
    if (typeof hue === 'string' && HSLColor.HEX_REGEX.test(hue)) {
      return HSLColor.fromHex(hue);
    }
    if (hue instanceof HSLColor) {
      return hue;
    }
    return new HSLColor(hue as number, saturation, lightness, alpha);
  }

  private static fromHex(hex: string) {
    const result = HSLColor.HEX_REGEX.exec(hex);

    let r = parseInt(''.padEnd(2, result[1]), 16);
    let g = parseInt(''.padEnd(2, result[2]), 16);
    let b = parseInt(''.padEnd(2, result[3]), 16);

    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let hue;
    let saturation;
    let lightness = (max + min) / 2;

    if (max === min) {
      hue = saturation = 0; // achromatic
    } else {
      const d = max - min;
      saturation = lightness > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          hue = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          hue = (b - r) / d + 2;
          break;
        case b:
          hue = (r - g) / d + 4;
          break;
      }
      hue /= 6;
    }

    saturation = Math.round(saturation * 1000);
    saturation = saturation / 10;
    lightness = Math.round(lightness * 1000);
    lightness = lightness / 10;
    hue = Math.round(360 * hue * 10) / 10;

    return new HSLColor(hue, saturation, lightness);
  }

  private static fromHsl(hsl: string): HSLColor {
    const [fullMatch, hue, saturation, lightness] = HSLColor.HSL_REGEX.exec(hsl);
    return new HSLColor(parseFloat(hue), parseFloat(saturation), parseFloat(lightness));
  }

  static lighten(color: HSLColor | string, amount: number) {
    return HSLColor.of(color)
      .clone()
      .lighten(amount);
  }

  static darken(color: HSLColor | string, amount: number) {
    return HSLColor.of(color)
      .clone()
      .darken(amount);
  }

  static saturate(color: HSLColor | string, amount: number) {
    return HSLColor.of(color)
      .clone()
      .saturate(amount);
  }

  static desaturate(color: HSLColor | string, amount: number) {
    return HSLColor.of(color)
      .clone()
      .desaturate(amount);
  }

  static hsla(color: HSLColor | string, amount: number) {
    return HSLColor.of(color)
      .clone()
      .setAlpha(amount);
  }

  getHue() {
    return this.hue;
  }

  getSaturation() {
    return this.saturation;
  }

  getLightness() {
    return this.lightness;
  }

  lighten(amount: number) {
    this.lightness += amount;
    return this;
  }

  darken(amount: number) {
    this.lightness -= amount;
    return this;
  }

  saturate(amount: number) {
    this.saturation += amount;
    return this;
  }

  desaturate(amount: number) {
    this.saturation -= amount;
    return this;
  }

  setAlpha(amount: number) {
    this.alpha = amount;
    return this;
  }

  toString() {
    if (this.alpha !== 1) {
      return `hsla(${this.hue}, ${this.saturation}%, ${this.lightness}%, ${this.alpha})`;
    }
    return `hsl(${this.hue}, ${this.saturation}%, ${this.lightness}%)`;
  }

  valueOf() {
    return this.toString();
  }

  get hsl() {
    return this.toString();
  }

  private clone() {
    return new HSLColor(this.hue, this.saturation, this.lightness);
  }

  /**
   * Copied from https://github.com/Qix-/color-convert/blob/master/conversions.js
   */
  toRGB() {
    const h = this.hue / 360;
    const s = this.saturation / 100;
    const l = this.lightness / 100;
    let t2;
    let t3;
    let val;

    if (s === 0) {
      val = l * 255;
      return [val, val, val];
    }

    if (l < 0.5) {
      t2 = l * (1 + s);
    } else {
      t2 = l + s - l * s;
    }

    const t1 = 2 * l - t2;

    const rgb = [0, 0, 0];
    for (let i = 0; i < 3; i++) {
      t3 = h + (1 / 3) * -(i - 1);
      if (t3 < 0) {
        t3++;
      }
      if (t3 > 1) {
        t3--;
      }

      if (6 * t3 < 1) {
        val = t1 + (t2 - t1) * 6 * t3;
      } else if (2 * t3 < 1) {
        val = t2;
      } else if (3 * t3 < 2) {
        val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
      } else {
        val = t1;
      }

      rgb[i] = val * 255;
    }

    return rgb;
  }

  /**
   * Copied from https://github.com/styled-components/polished/blob/master/src/color/getLuminance.js
   */
  getLuminance(hsl?: string | HSLColor) {
    const color = hsl ? HSLColor.of(hsl) : this;
    const [r, g, b] = color.toRGB().map((value) => {
      const channel = value / 255;
      return channel <= 0.03928 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4;
    });
    return parseFloat((0.2126 * r + 0.7152 * g + 0.0722 * b).toFixed(3));
  }

  contrast(
    dark: string | HSLColor = 'hsl(0, 0%, 0%)',
    light: string | HSLColor = 'hsl(0, 0%, 100%)',
    threshold = 0.43
  ) {
    // Figure out which is actually light and dark:
    if (this.getLuminance(dark) > this.getLuminance(light)) {
      const t = light;
      light = dark;
      dark = t;
    }

    if (this.getLuminance() < threshold) {
      return light;
    } else {
      return dark;
    }
  }
}
