import { FETCH_MENU_URL } from '../config';
import { useState, useEffect } from 'react';

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
    setRestaurant(json.data);
  }

  // Return retaurant data
  return restaurant;
};

export default useRestaurant;
