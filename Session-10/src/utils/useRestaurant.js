import { FETCH_MENU_URL } from '../config';
import { useState } from 'react';

const useRestaurant = resId => {
  // Create & maintain state for fectching data logic
  const [restaurant, setRestaurant] = useState(null);

  // Get data from API
  useEffect(() => {
    getRestaurantMenu(); // data fetching
  }, []);

  async function getRestaurantMenu() {
    const data = await fetch(
      FETCH_MENU_URL + resId, // fetching dynamic restaurant ID
    );
    const json = await data.json();
    console.log(json.data);
    setRestaurant(json.data);
  }

  // Return retaurant data
  return restaurant;
};

export default useRestaurant;
