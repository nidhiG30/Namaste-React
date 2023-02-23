import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IMG_CDN_URL } from '../config';
import Shimmer from './Shimmer';
import useRestaurant from '../utils/useRestaurant';
import { addItem } from '../utils/cartSlice';
import { useDispatch } from 'react-redux';

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurant = useRestaurant(resId); // data from useRestaurant() hook goes inside restaurant.

  const dispatch = useDispatch();

  const handleAddItem = () => {
    // on click of Add Item button created below this function is called
    dispatch(addItem('Grapes')); // dispatch(action (pass the passload)).
  };

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className='menu'>
      <div>
        <h1>Restaurant Id: {resId}</h1> {/* 'id' could be 'resId' */}
        <h2>{restaurant?.name}</h2>
        <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
        <h3>{restaurant?.area}</h3>
        <h3>{restaurant?.city}</h3>
        <h3>{restaurant?.avgRating} ⭐</h3>
        <h3>{restaurant?.costForTwoMsg}</h3>
      </div>
      <div>
        <button
          className='p-2 m-5 bg-green-100'
          onClick={() => handleAddItem()}
        >
          Add Item
        </button>
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
