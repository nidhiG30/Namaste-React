import Header from '../Header';
import { render, waitFor, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../utils/store.js';
import { StaticRouter } from 'react-router-dom/server';
import { MENU_DATA } from '../../mocks/data.js';
import '@testing-library/jest-dom';
import RestaurantMenu from '../RestaurantMenu';

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MENU_DATA);
    },
  });
});

test('Add Items to Cart', async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
        <RestaurantMenu />
      </Provider>
    </StaticRouter>,
  );

  await waitFor(() => expect(body.getByTestId('menu')));

  const addBtn = body.getAllByTestId('addBtn');

  fireEvent.click(addBtn[0]); // this passes the test
  fireEvent.click(addBtn[2]); // because of this the test will fail, as below we have expected to be ony 1 item in cart

  const cart = body.getByTestId('cart');

  expect(cart.innerHTML).toBe('Cart - 1 items');
});
