import { StyleClassHelper } from './StyleClassHelper';

describe('StyleClassHelper', () => {
  test('add class names', () => {
    const helper = StyleClassHelper.of('class1', 'class2');
    expect(helper.className).toEqual(`class1 class2`);
  });

  test('put new classes', () => {
    const helper = StyleClassHelper.of('firstClass');
    helper.put('secondClass');
    expect(helper.className).toEqual(`firstClass secondClass`);
  });

  test('putIfPresent', () => {
    const helper = StyleClassHelper.of('firstClass');
    helper.put('secondClass');
    helper.putIfPresent('ifPresent1');
    helper.putIfPresent('ifPresent2', 'ifPresent3');
    helper.putIfPresent(true === false && 'shouldNotBeThere1', 'a' === 'a' && 'ifPresent4');

    expect(helper.className).toEqual('firstClass secondClass ifPresent1 ifPresent2 ifPresent3 ifPresent4');
  });

  test('className, toString and valueOf return same value', () => {
    const helper = StyleClassHelper.of('class1', 'class2');
    expect(helper.toString()).toEqual(`class1 class2`);
    expect(helper.valueOf()).toEqual(`class1 class2`);
    expect(helper.className).toEqual(`class1 class2`);
  });
});
