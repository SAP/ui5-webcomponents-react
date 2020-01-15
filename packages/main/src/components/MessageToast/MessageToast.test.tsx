import { MessageToast } from '@ui5/webcomponents-react/lib/MessageToast';
import sinon from 'sinon';

describe('Message Toast', () => {
  test('Show Default', () => {
    const callback = sinon.spy(MessageToast, 'show');
    MessageToast.show('Default');
    expect(callback.called).toEqual(true);
    callback.restore();
  });

  test('Show Error', () => {
    const callback = sinon.spy(MessageToast, 'error');
    MessageToast.error('Error');
    expect(callback.called).toEqual(true);
    callback.restore();
  });

  test('Show Warning', () => {
    const callback = sinon.spy(MessageToast, 'warning');
    MessageToast.warning('Warning');
    expect(callback.called).toEqual(true);
    callback.restore();
  });

  test('Show Success', () => {
    const callback = sinon.spy(MessageToast, 'success');
    MessageToast.success('Default');
    expect(callback.called).toEqual(true);
    callback.restore();
  });
});
