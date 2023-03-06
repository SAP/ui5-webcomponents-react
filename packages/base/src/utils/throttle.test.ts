import { throttle } from './throttle';

const setTimeout = (timeout: number) => {
  return new Promise((resolve) => {
    globalThis.setTimeout(resolve, timeout);
  });
};

describe('throttle', function () {
  it('will be called throttled with leading edge', async () => {
    const mock = jest.fn();
    const callback = throttle(mock, 400, { trailing: false });
    callback('H');
    await setTimeout(100);
    callback('He');
    await setTimeout(100);
    callback('Hell');
    await setTimeout(100);
    callback('Hello');
    await setTimeout(400);
    expect(mock).toBeCalledTimes(1);
    expect(mock).toBeCalledWith('H');
  });

  it('will be called throttled with trailing edge', async () => {
    const mock = jest.fn();
    const callback = throttle(mock, 400, { leading: false });
    callback('H');
    await setTimeout(100);
    callback('He');
    await setTimeout(100);
    callback('Hell');
    await setTimeout(100);
    callback('Hello');
    await setTimeout(400);
    expect(mock).toBeCalledTimes(1);
    expect(mock).toBeCalledWith('Hello');
  });

  it('will be called throttled with leading and trailing edges by default', async () => {
    const mock = jest.fn();
    const callback = throttle(mock, 400);
    callback('H');
    await setTimeout(100);
    callback('He');
    await setTimeout(100);
    callback('Hell');
    await setTimeout(100);
    callback('Hello');
    await setTimeout(400);
    expect(mock).toBeCalledTimes(2);
    expect(mock).toBeCalledWith('H');
    expect(mock).toBeCalledWith('Hello');
  });

  it('cancels the throttling', async () => {
    const mock = jest.fn();
    const callback = throttle(mock, 300, { leading: false });
    callback('H');
    callback.cancel();
    await setTimeout(400);
    expect(mock).not.toBeCalled();
  });
});
