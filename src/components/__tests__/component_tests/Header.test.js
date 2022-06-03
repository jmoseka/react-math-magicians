import '@testing-library/jest-dom/extend-expect';
import { cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Header from '../../Header';

afterEach(() => {
  cleanup();
});

test('should match snapshot', () => {
  const tree = renderer.create(
    <BrowserRouter>
      <Header />
    </BrowserRouter>,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
