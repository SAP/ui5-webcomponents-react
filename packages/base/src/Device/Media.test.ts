import * as sinon from 'sinon';
import { setupMatchMedia } from '../../../../config/jestsetup';
import { EventRegistry } from './EventRegistry';
import { Media, RANGESETS } from './Media';

const defaultSupportInstance = {
  matchmedialistener: false,
  matchmedia: false
};

describe('Device - Media', () => {
  test('invoke constructor', () => {
    const media = new Media(defaultSupportInstance);
    // @ts-ignore
    expect(media.mediaTimeout).toBe(100);
    expect(media.hasRangeSet(RANGESETS.SAP_STANDARD)).toBe(true);
    expect(media.hasRangeSet(RANGESETS.SAP_STANDARD_EXTENDED)).toBe(true);
  });

  test('invoke constructor 2', () => {
    const media = new Media({ matchmedia: true, matchmedialistener: true });
    // @ts-ignore
    expect(media.mediaTimeout).toBe(0);
    expect(media.hasRangeSet(RANGESETS.SAP_STANDARD)).toBe(true);
    expect(media.hasRangeSet(RANGESETS.SAP_STANDARD_EXTENDED)).toBe(true);
  });

  test('matchLegacy', () => {
    const media = new Media(defaultSupportInstance);
    // @ts-ignore
    window.matchMedia = () => {
      return false;
    };
    expect(media.matches(19, 20, 'rem')).toBe(false);
  });

  test('match', () => {
    const media = new Media({ matchmedia: true, matchmedialistener: true });
    // @ts-ignore
    window.matchMedia = () => {
      return { matches: true };
    };
    expect(media.matches(19, 20, 'rem')).toBe(true);
  });

  test('Attach, fire and Detach Event', () => {
    const media = new Media(defaultSupportInstance);
    const callback = sinon.spy();
    // @ts-ignore
    media.attachHandler(callback, this);
    expect(EventRegistry.mEventRegistry.hasOwnProperty('media_Std'));
    EventRegistry.fireEvent('media_Std');
    expect(callback.called).toBe(true);
    // @ts-ignore
    media.detachHandler(callback, this);
    expect(EventRegistry.mEventRegistry.hasOwnProperty('media_Std')).toBe(false);
  });

  test('Init Custom Range Set and remove it again', () => {
    const media = new Media(defaultSupportInstance);
    media.initRangeSet('MyRangeSet', [200, 400], 'px', ['Small', 'Medium', 'Large']);
    expect(media.getCurrentRange('MyRangeSet', 300).name).toBe('Medium');
    media.removeRangeSet('MyRangeSet');
  });

  test('Init Custom Range Set and remove it again w/ matchmedialistener', () => {
    setupMatchMedia();
    const media = new Media({ matchmedia: true, matchmedialistener: true });
    media.initRangeSet('MyRangeSet', [200, 400], 'px', ['Small', 'Medium', 'Large']);
    expect(media.getCurrentRange('MyRangeSet', 300).name).toBe('Medium');
    media.removeRangeSet('MyRangeSet');
  });

  test('Remove unknown rangeset should not crash', () => {
    const media = new Media(defaultSupportInstance);
    expect(() => media.removeRangeSet('MyRangeSet')).not.toThrow();
  });

  test("Don't remove build in rangesets", () => {
    const media = new Media(defaultSupportInstance);
    media.removeRangeSet(RANGESETS.SAP_STANDARD);
    expect(media.hasRangeSet(RANGESETS.SAP_STANDARD)).toBe(true);
  });
});
