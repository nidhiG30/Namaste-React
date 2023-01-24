import { restaurantList } from '../config';
import RestaurantCard from './RestaurantCard';
import { useState, useEffect } from 'react';

function filterData(searchText, restaurants) {
  return restaurants.filter(restaurant => restaurant?.data?.name.includes(searchText));
}

const Body = () => {
 const [restaurants, setRestaurants] = useState(restaurantList);
  const [searchText, setSearchText] = useState("");

  // Fetch data from API with useEffect() hook.
  useEffect(() => {
    console.log("render");
  })

  return (
    <>
      <div className='search-container'>
        <input
          type='text'
          className='search-input'
          placeholder='Search'
          value={searchText}
          onChange={e => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className='search-btn'
          onClick={() => {
            // need to filter the data from restaurantList
            const data = filterData(searchText, restaurants);

            // update the state - restaurants
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      <div className='restaurant-list'>
        {restaurants.map(restaurant => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          ); // Here the "key" remains unique for every element that gets added to the DOM, reconciliation.
        })}
      </div>
    </>
  );
};

export default Body;
