import { HSLColor } from './HSLColor';
import { sapColorSemanticNegative, sapUiBrand, sapUiHighlight } from './sap_fiori_3';

describe('HSL Color', () => {
  test('lighten', () => {
    const color = HSLColor.of(sapUiHighlight).lighten(63).hsl;
    expect(color).toEqual('hsl(209.8, 90.9%, 95%)'); //hsl(208.4, 90.5%, 95.9%)
  });

  test('darken', () => {
    const color = HSLColor.of(sapUiBrand).darken(10).hsl;
    expect(color).toEqual('hsl(209.8, 90.9%, 32.9%)'); //hsl(210, 90.5%, 32.9%)
  });

  test('border bg colors', () => {
    const color = HSLColor.of(sapColorSemanticNegative).lighten(59.5).hsl;
    expect(color).toEqual('hsl(0, 100%, 95.5%)'); //hsl(0, 100%, 96.1%)
  });
});
