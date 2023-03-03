import { restaurantList } from '../config';
import RestaurantCard from './RestaurantCard';
import { useState, useEffect, useContext } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import { filterData } from '../utils/helper';
import useOnline from '../utils/useOnline';
import UserContext from '../utils/UserContext';

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState('');
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1189882&lng=79.04192739999999&page_type=DESKTOP_WEB_LISTING',
    );
    const json = await data.json();

    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards); // To put the data
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  if (!allRestaurants) return null;

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className='search-container p-5 bg-pink-50 my-2'>
        <input
          data-testid='search-input'
          type='text'
          className='focus:bg-green-50 p-2 m-2'
          placeholder='Search'
          value={searchText}
          onChange={e => {
            setSearchText(e.target.value);
          }}
        />
        <button
          data-testid='search-btn'
          className='p-2 m-2 bg-green-900 hover:bg-green-400 text-white rounded-md'
          onClick={() => {
            // need to filter the data from restaurantList
            const data = filterData(searchText, allRestaurants);

            // update the state - restaurants
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
        <input
          value={user.name}
          onChange={e =>
            setUser({
              ...user, // This will spread all data from 'user' and then, only 'name' will get updated for below code
              name: e.target.value, // this will update the value of 'name' that was default present in 'user'
            })
          }
        ></input>
        <input
          value={user.email}
          onChange={e =>
            setUser({
              ...user,
              email: e.target.value, // this will update the 'email' that was default present in 'user'
            })
          }
        ></input>
      </div>

      <div className='flex flex-wrap' data-testid='res-list'>
        {filteredRestaurants.map(restaurant => {
          return (
            <Link // Added link on RestaurantCard
              to={'/restaurant/' + restaurant.data.id} // passing dynamic ID to the restaurant
              key={restaurant.data.id}
            >
              <RestaurantCard {...restaurant.data} user={user} />
            </Link>
          ); // Here the "key" remains unique for every element that gets added to the DOM, reconciliation.
        })}
      </div>
    </>
  );
};

export default Body;
