import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import About from './components/About';
import Error from './components/Error';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const AppLayout = () => {
  return (
    <>
      <Header />
      <About/> // if path is /about
      <Body /> // if path is /
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/about', // 'About' is the child of <AppLayout> as mentioned in this block
        element: <About />,
      },
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);
