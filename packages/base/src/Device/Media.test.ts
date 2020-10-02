import { EventRegistry } from './EventRegistry';
import { getCurrentRange, MediaLegacy, RANGESETS } from './Media';

describe('Device - Media', () => {
  test('invoke constructor', () => {
    const media = new MediaLegacy();
    expect(media.hasRangeSet(RANGESETS.SAP_STANDARD)).toBe(true);
    expect(media.hasRangeSet(RANGESETS.SAP_STANDARD_EXTENDED)).toBe(true);
    media.initRangeSet(RANGESETS.SAP_STANDARD_EXTENDED);
    expect(media.hasRangeSet(RANGESETS.SAP_STANDARD)).toBe(true);
  });

  test('getCurrentRangeSet with undefined Range Set', () => {
    expect(getCurrentRange('Not_Defined', 100)).toBeNull();
  });

  test('Attach, fire and Detach Event', () => {
    const media = new MediaLegacy();
    const callback = jest.fn();
    // @ts-ignore
    media.attachHandler(callback, this);
    expect(EventRegistry.mEventRegistry.hasOwnProperty('media_Std'));
    EventRegistry.fireEvent('media_Std');
    expect(callback).toBeCalled();
    // @ts-ignore
    media.detachHandler(callback, this);
    expect(EventRegistry.mEventRegistry.hasOwnProperty('media_Std')).toBe(false);
  });

  test('Init Custom Range Set and remove it again', () => {
    const media = new MediaLegacy();
    media.initRangeSet('MyRangeSet', [200, 400], 'px', ['Small', 'Medium', 'Large']);
    expect(media.getCurrentRange('MyRangeSet', 300).name).toBe('Medium');
    media.removeRangeSet('MyRangeSet');
  });

  test('Init Custom Range Set and remove it again w/ matchmedialistener', () => {
    const media = new MediaLegacy();
    media.initRangeSet('MyRangeSet', [200, 400], 'px', ['Small', 'Medium', 'Large']);
    expect(media.getCurrentRange('MyRangeSet', 300).name).toBe('Medium');
    media.removeRangeSet('MyRangeSet');
  });

  test('Remove unknown rangeset should not crash', () => {
    const media = new MediaLegacy();
    expect(() => media.removeRangeSet('MyRangeSet')).not.toThrow();
  });

  test("Don't remove build in rangesets", () => {
    const media = new MediaLegacy();
    media.removeRangeSet(RANGESETS.SAP_STANDARD);
    expect(media.hasRangeSet(RANGESETS.SAP_STANDARD)).toBe(true);
  });
});
