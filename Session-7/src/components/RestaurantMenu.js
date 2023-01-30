import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IMG_CDN_URL } from '../config';
import Shimmer from './Shimmer';

const RestaurantMenu = () => {
  // How to read dynamic URL params
  const { resId } = useParams();

  const [restaurant, setRestaurant] = useState(null); // 'null' poses as a 'value' than just passing an 'empty object {}' which causes error on page reload

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      'https://www.swiggy.com/dapi/menu/v4/full?lat=21.1189882&lng=79.04192739999999&menuId='+resId // fetching dynamic restaurant ID
    );
    const json = await data.json();
    console.log(json.data);
    setRestaurant(json.data);
  }

  return !restaurant ? ( // Making early return if the restaurant state was found to be 'null'
    <Shimmer />
  ) : (
    <div className='menu'>
      <div>
        <h1>Restaurant Id: {resId}</h1> {/* 'id' could be 'resId' */}
        <h2>{restaurant.name}</h2>
        <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
        <h3>{restaurant.area}</h3>
        <h3>{restaurant.city}</h3>
        <h3>{restaurant.avgRating} ⭐</h3>
        <h3>{restaurant.costForTwoMsg}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {Object.values(restaurant?.menu?.items).map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
