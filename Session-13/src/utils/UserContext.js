import { createContext } from 'react';

const UserContext = createContext({
  user: {
    name: 'Dummy Name',
    email: 'dummy@gmail.com',
  },
});

UserContext.displayName = "UserContext"; // Context name can be seen while debugging on react dev tool

export default UserContext;
