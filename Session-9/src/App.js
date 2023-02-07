import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import About from './components/About';
import Error from './components/Error';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';
import Profile from './components/Profile';

const Instamart = lazy(() => import('./components/Instamart'));
// Upon On Demand Loading  -> Upon Render -> Suspend Loading

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
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
        path: '/about', // "/about" -> "about" (also valid)
        element: <About />,
        children: [
          {
            path: 'profile', // parentPath/{path} ==> localhost:1234/about/profile
            element: <Profile />,
          },
        ],
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/restaurant/:resId', // 'id' could be 'resId'
        element: <RestaurantMenu />,
      },
      {
        path: '/instamart', // keeps header and footer in instamart
        element: (
          <Suspense>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);
