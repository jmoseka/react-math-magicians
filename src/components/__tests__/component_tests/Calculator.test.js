import '@testing-library/jest-dom/extend-expect';
import { cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
// eslint-disable-next-line import/extensions
import Calculator from '../../calculator.js';

afterEach(() => {
  cleanup();
});

test('should match snapshot', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});
