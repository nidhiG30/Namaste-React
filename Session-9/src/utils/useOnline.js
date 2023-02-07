import { useState } from 'react';

const useOnline = () => {
  const isOnline = () => {
    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {
      // Logic to keep online/offline status
      window.addEventListener('online', () => {
        
      }); // This event listener is called only Once on page load because of empty array
    }, []);
  };

  return isOnline; // returns true or false, this will be used to show the internet status
};

export default useOnline;
