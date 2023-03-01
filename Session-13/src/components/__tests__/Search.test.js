import Body from '../Body';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../utils/store.js';
import { StaticRouter } from 'react-router-dom/server';
import { RESTAURANT_DATA } from '../../mocks/data.js';

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

  const shimmer = body.getByTestId("shimmer");
  console.log(shimmer);
});
