import {
  supportInputPlaceholder,
  supportMatchMedia,
  supportMatchMediaListener,
  supportOrientation,
  supportPointerEvents,
  supportRetina,
  supportWebSocket
} from './Support';

describe('Support', () => {
  test('pointer events', () => {
    expect(supportPointerEvents()).toBe(false);
  });

  test('input placeholder', () => {
    expect(supportInputPlaceholder()).toBe(true);
  });

  test('websocket', () => {
    expect(supportWebSocket()).toBe(true);
  });

  test('match media', () => {
    expect(supportMatchMedia()).toBe(true);
  });

  test('match media listener', () => {
    expect(supportMatchMediaListener()).toBe(true);
  });

  test('orientation', () => {
    expect(supportOrientation()).toBe(false);
  });
  test('retina', () => {
    expect(supportRetina()).toBe(false);
  });
});
