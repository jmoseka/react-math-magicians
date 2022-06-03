import operate from '../../../logic/operate';

describe('Unit test: Operations', () => {
  test('17 + 3 = 20', () => {
    const operation = operate(17, 3, '+');
    expect(operation).toBe('20');
  });

  test('77 - 33 = 44', () => {
    const operation = operate(77, 33, '-');
    expect(operation).toBe('44');
  });

  test('7 x 3 = 21', () => {
    const operation = operate(7, 3, 'x');
    expect(operation).toBe('21');
  });

  test('2 ÷ 0 = Can\'t divide by 0.', () => {
    const operation = operate(2, 0, '÷');
    expect(operation).toBe('Can\'t divide by 0.');
  });

  test('78 % 4 = 2', () => {
    const operation = operate(78, 4, '%');
    expect(operation).toBe('2');
  });
});