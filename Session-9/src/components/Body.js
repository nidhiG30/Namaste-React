import { restaurantList } from '../config';
import RestaurantCard from './RestaurantCard';
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import { filterData } from '../utils/helper';

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1189882&lng=79.04192739999999&page_type=DESKTOP_WEB_LISTING',
    );
    const json = await data.json();

    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards); // To put the data
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards); // To put the data
  }

  if (!allRestaurants) return null; // Early return => (when no restaurant found, component not rendered)

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
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
            const data = filterData(searchText, allRestaurants);

            // update the state - restaurants
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      <div className='restaurant-list'>
        {filteredRestaurants.map(restaurant => {
          return (
            <Link // Added link on RestaurantCard
              to={'/restaurant/' + restaurant.data.id} // passing dynamic ID to the restaurant
              key={restaurant.data.id}
            >
              <RestaurantCard {...restaurant.data} />
            </Link>
          ); // Here the "key" remains unique for every element that gets added to the DOM, reconciliation.
        })}
      </div>
    </>
  );
};

export default Body;
