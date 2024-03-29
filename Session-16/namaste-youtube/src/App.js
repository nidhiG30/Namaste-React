import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Body from './components/Body';
import Demo from './components/Demo';
import Demo2 from './components/Demo2';
import Head from './components/Head';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import store from './utils/store';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {
        path: '/',
        element: <MainContainer />,
      },
      {
        path: 'watch',
        element: <WatchPage />,
      },
      {
        path: 'demo',
        element: (
          <>
            <Demo />
            <Demo2 />
          </>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={appRouter} />
        {/* Components will change a/c to the appRouter. If the path is '/', body will be rendered. */}
      </div>
    </Provider>
  );
}

export default App;
