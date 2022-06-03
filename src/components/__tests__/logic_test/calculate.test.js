import calculate from '../../../logic/calculate';

describe('Unit test: Calculate', () => {
  test('AC is pressed', () => {
    const calc = calculate({}, 'AC');
    expect(calc).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  test('7 is pressed when 3 x is recorded', () => {
    const calc = calculate({
      total: '3',
      next: null,
      operation: 'x',
    }, '7');
    expect(calc).toEqual({
      total: '3',
      next: '7',
      operation: 'x',
    });
  });

  test('= is pressed when 20 ÷ 4 is recorded', () => {
    const calc = calculate({
      total: '20',
      next: '4',
      operation: '÷',
    }, '=');
    expect(calc).toEqual({
      total: '5',
      next: null,
      operation: null,
    });
  });
});
