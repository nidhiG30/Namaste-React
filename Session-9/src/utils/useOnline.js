import { useState, useEffect } from 'react';

const useOnline = () => {
    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {
      // The same callback function cannot be used while using the opposite event listener
      // that's why created constant to use it in place of callbacks in event listeners
      const handleOnline = () => {
        setIsOnline(true);
      };

      const handleOffline = () => {
        setIsOnline(false)
      };

      window.addEventListener('online', handleOnline);

      window.addEventListener('offline', handleOffline);

      return (() => {
        window.removeEventListener('online', handleOnline); // When adding an event listener, the same function needs to be removed while unmounting.
        window.removeEventListener('offline', handleOnline);
      })
    }, []);

  return isOnline; // returns boolean value which isOnline contains and not isOnline itself as state, this will be used to show the internet status
};

export default useOnline;
