import React, { lazy, Suspense, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Error from './components/Error';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';
import Profile from './components/Profile';
import Shimmer from './components/Shimmer';
import UserContext from './utils/UserContext';

const Instamart = lazy(() => import('./components/Instamart'));
// Upon On Demand Loading  -> Upon Render -> Suspend Loading

const About = lazy(() => import('./components/about'));

const AppLayout = () => {
  const [user, setUser] = useState({
    name: 'Nidhi Gadge',
    email: 'gadgenidhi9@gmail.com',
  });

  return (
    <UserContext.Provider
      value={{
        user: user,
        setUser: setUser,
      }}
    >
      <Header />
      <Outlet />
      <Footer />
    </UserContext.Provider>
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
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
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
        element: (
          <Body
            user={{
              name: 'Namaste React',
              email: 'xyz@namastedev.com',
            }}
          />
        ),
      },
      {
        path: '/restaurant/:resId', // 'id' could be 'resId'
        element: <RestaurantMenu />,
      },
      {
        path: '/instamart', // keeps header and footer in instamart
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);
