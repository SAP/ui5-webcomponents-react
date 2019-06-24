import { HSLColor } from './HSLColor';
import { sapUiBaseText, sapAccentColor7, sapColorSemanticNegative, sapUiHighlight } from './sap_belize';

describe('HSL Color', () => {
  test('lighten', () => {
    const color = HSLColor.of(sapUiBaseText).lighten(20).hsl;
    expect(color).toEqual('hsl(0, 0%, 40%)');
  });

  test('darken', () => {
    const color = HSLColor.of(sapAccentColor7).darken(8).hsl;
    expect(color).toEqual('hsl(180, 70.8%, 26.9%)');
  });

  test('border colors', () => {
    const color = HSLColor.of(sapColorSemanticNegative).lighten(10).hsl;
    expect(color).toEqual('hsl(0, 100%, 46.7%)');
  });

  test('border bg colors', () => {
    const color = HSLColor.of(sapColorSemanticNegative).lighten(58).hsl;
    expect(color).toEqual('hsl(0, 100%, 94.7%)');
  });

  test('Combined Saturate and Lighten', () => {
    const saturated = HSLColor.of(sapUiHighlight).saturate(10).hsl;
    const color = HSLColor.of(saturated).lighten(10).hsl;
    expect(color).toEqual('hsl(207.2, 54.5%, 56%)'); // hsl(207.3, 54.8%, 56.7%)
  });
});
