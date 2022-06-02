import '@testing-library/jest-dom/extend-expect';
import { cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Quote from '../../Quote';

afterEach(() => {
  cleanup();
});

test('should match snapshot', () => {
  const tree = renderer.create(<Quote />).toJSON();
  expect(tree).toMatchSnapshot();
});
