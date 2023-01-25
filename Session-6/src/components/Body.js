import { restaurantList } from '../config';
import RestaurantCard from './RestaurantCard';
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';

function filterData(searchText, restaurants) {
  return restaurants.filter(restaurant =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase()),
  );
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]); // allRestaurants, used to search & to filter
  const [filteredRestaurants, setFilteredRestaurants] = useState([]); // filteredRestaurants, used to render
  const [searchText, setSearchText] = useState(''); //initially no text in search bar

  // Empty dependecy array is called only once after every render
  // dep array [searchText] => once after initial render + render everytime the state is changed
  useEffect(() => {
    // API call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1189882&lng=79.04192739999999&page_type=DESKTOP_WEB_LISTING',
    );
    const json = await data.json();
    console.log(json);

    // Insert real data of the restaurants on UI fetched from Swiggy's API
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards); // To put the data
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards); // To put the data
  }

  console.log('render');

  // Conditional Rendering
  // if restaurant is empty (allRestaurants and filteredRestaurants both contains data, so that's why we take allRestaurants to check this condition as it provides wholesome data) => shimmer UI
  // if restaurant has data => actual data UI

  if (!allRestaurants) return null; // Early return => (when no restaurant found, component not rendered)

  if (filteredRestaurants?.length === 0) return <h1>No Restaurant match your filter!!</h1>

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
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          ); // Here the "key" remains unique for every element that gets added to the DOM, reconciliation.
        })}
      </div>
    </>
  );
};

export default Body;

