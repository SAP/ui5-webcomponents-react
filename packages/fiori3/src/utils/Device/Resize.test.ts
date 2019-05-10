import * as sinon from 'sinon';
import { EventRegistry } from './EventRegistry';
import { Resize } from './Resize';

describe('Device - Resize', () => {
  test('Add and remove handler', () => {
    const instance = new Resize();
    const callback = sinon.spy();
    // @ts-ignore
    instance.attachHandler(callback, this);
    // @ts-ignore
    expect(EventRegistry.mEventRegistry.resize).toHaveLength(1);
    // @ts-ignore
    instance.detachHandler(callback, this);
    expect(EventRegistry.mEventRegistry.hasOwnProperty('resize')).toBe(false);
  });
});
