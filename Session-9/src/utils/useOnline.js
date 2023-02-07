import { useState } from "react";

const useOnline = () => {
  const isOnline = () => {
    const [isOnline, setIsOnline] = useState();
    
  }

  return isOnline; // returns true or false, this will be used to show the internet status

};

export default useOnline;