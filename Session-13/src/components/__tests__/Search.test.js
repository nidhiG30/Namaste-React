import Body from '../Body';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../utils/store.js';
import { StaticRouter } from 'react-router-dom/server';
import { RESTAURANT_DATA } from '../../mocks/data.js';

global.fetch = jest.fn(() => {
  Promise.resolve({
    json: Promise.resolve(RESTAURANT_DATA),
  });
});

test('Search Results on Home Page', () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>,
  );

  console.log(body);
});
