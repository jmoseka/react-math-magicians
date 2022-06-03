import '@testing-library/jest-dom/extend-expect';
import { cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Home from '../../Home';

afterEach(() => {
  cleanup();
});

test('should match snapshot', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
