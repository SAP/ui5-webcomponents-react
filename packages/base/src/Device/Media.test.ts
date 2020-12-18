import {
  getCurrentRange,
  RANGESETS,
  attachHandler,
  detachHandler,
  initRangeSet,
  removeRangeSet,
  hasRangeSet
} from './Media';

describe('Device - Media', () => {
  test('getCurrentRangeSet with undefined Range Set', () => {
    expect(getCurrentRange('Not_Defined', 100)).toBeNull();
  });

  test('Attach, fire and Detach Event', () => {
    const callback = jest.fn();
    attachHandler(callback);
    // expect(callback).toBeCalled();
    detachHandler(callback);
  });

  test('Init Custom Range Set and remove it again', () => {
    initRangeSet('MyRangeSet', [200, 400], 'px', ['Small', 'Medium', 'Large']);
    expect(getCurrentRange('MyRangeSet', 300).name).toBe('Medium');
    removeRangeSet('MyRangeSet');
  });

  test('Init Custom Range Set and remove it again w/ matchmedialistener', () => {
    initRangeSet('MyRangeSet', [200, 400], 'px', ['Small', 'Medium', 'Large']);
    expect(getCurrentRange('MyRangeSet', 300).name).toBe('Medium');
    removeRangeSet('MyRangeSet');
  });

  test('Remove unknown rangeset should not crash', () => {
    expect(() => removeRangeSet('MyRangeSet')).not.toThrow();
  });

  test("Don't remove build in rangesets", () => {
    removeRangeSet(RANGESETS.SAP_STANDARD);
    expect(hasRangeSet(RANGESETS.SAP_STANDARD)).toBe(true);
  });
});
