import { render } from '@testing-library/react';
import Header from '../Header';
import { Provider } from 'react-redux';
import store from '../../utils/store';
import { StaticRouter } from 'react-router-dom/server';

test('Logo should load on rendering header', () => {
  // Load Header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>,
  );

  // Check of logo is loaded

  const logo = header.getAllByTestId('logo');

  // console.log(logo[0]);

  // expect(logo).toBe("dummyLogo.png");
  // expect(logo.innerHTML).toBe("dummyLogo.png");
  // expect(logo.childern).toBe("dummyLogo.png");
  // expect(logo.props).toBe("dummyLogo.png");
  // expect(logo.src).toBe("dummyLogo.png");
  // expect(logo[0].src).toBe("dummyLogo.png");
  // ALL ABOVE ASSERTIONS GOT FAILED.

  expect(logo[0].src).toBe("http://localhost/dummy.png");

});

test('Online status should be green on rendering header', () => {
  // Load Header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>,
  );

  // Check of logo is loaded

  const onlineStatus = header.getByTestId('online-status'); // instead of using getAllByTestId

  expect(onlineStatus.innerHTML).toBe("✅");

});

test('Cart should have 0 items on rendering header', () => {
  // Load Header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>,
  );

  // Check of logo is loaded

  const cart = header.getByTestId('cart'); // instead of using getAllByTestId

  expect(cart.innerHTML).toBe("Cart - 0 items");

});