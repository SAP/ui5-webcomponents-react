import { debounce } from './debounce';
import { setTimeout } from 'timers/promises';

describe('debounce', function () {
  it('will be called debounced', async () => {
    const mock = jest.fn();
    const callback = debounce(mock, 300);
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

    callback('Hello 123');
    await setTimeout(400);
    expect(mock).toBeCalledTimes(2);
    expect(mock).toBeCalledWith('Hello 123');
  });

  it('cancel debounce', async () => {
    const mock = jest.fn();
    const callback = debounce(mock, 300);
    callback('H');
    await setTimeout(100);
    callback.cancel();
    await setTimeout(400);
    expect(mock).not.toHaveBeenCalled();
  });
});
