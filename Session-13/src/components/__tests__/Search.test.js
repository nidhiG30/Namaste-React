import Body from '../Body';
import { render, waitFor, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../utils/store.js';
import { StaticRouter } from 'react-router-dom/server';
import { RESTAURANT_DATA } from '../../mocks/data.js';
import '@testing-library/jest-dom';

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_DATA);
    },
  });
});

test('Shimmer should load on Home Page', () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>,
  );

  const shimmer = body.getByTestId('shimmer');

  expect(shimmer.children.length).toBe(10);

  console.log(shimmer);
});

test('Restaurant should load on Home Page', async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>,
  );

  await waitFor(() => expect(body.getByTestId('search-btn')));

  const resList = body.getByTestId('res-list');

  expect(resList.children.length).toBe(15);

  // console.log(shimmer);
});

test('Search for string (food) on Home Page', async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>,
  );

  await waitFor(() => expect(body.getByTestId('search-btn')));

  const input = body.getByTestId('search-input');

  fireEvent.change(input, {
    target: {
      value: 'fuel',
    },
  });

  const searchBtn = body.getByTestId('search-btn');

  fireEvent.click(searchBtn);

  const resList = body.getByTestId('res-list');

  expect(resList.children.length).toBe(1);
});
