import * as sinon from 'sinon';
import { EventRegistry } from './EventRegistry';
import { Orientation } from './Orientation';

describe('Device - Orientation', () => {
  test('Add and remove handler', () => {
    const instance = new Orientation();
    const callback = sinon.spy();
    // @ts-ignore
    instance.attachHandler(callback, this);
    // @ts-ignore
    expect(EventRegistry.mEventRegistry.orientation).toHaveLength(1);
    // @ts-ignore
    instance.detachHandler(callback, this);
    expect(EventRegistry.mEventRegistry.hasOwnProperty('orientation')).toBe(false);
  });
});
