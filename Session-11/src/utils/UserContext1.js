import { createContext } from 'react';

const UserContext1 = createContext({
  user: {
    name: 'Dummy Name',
    email: 'dummy@gmail.com',
  },
});

export default UserContext1;
