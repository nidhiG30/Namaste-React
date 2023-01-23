import { restaurantList } from '../config';
import RestaurantCard from './RestaurantCard';
import { useState } from 'react';

const Body = () => {
  // const searchTxt = "KFC"
  const [searchInput, setSearchInput] = useState('KFC');

  return (
    <>
      <div className='search-container'>
        <input
          type='text'
          className='search-input'
          placeholder='Search'
          value={searchInput}
          onChange={e => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className='search-btn'
          onClick={() => {
            // need to filter the data from restaurantList
            filterData();
          }}
        >
          Search
        </button>
      </div>

      <div className='restaurant-list'>
        {restaurantList.map(restaurant => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          ); // Here the "key" remains unique for every element that gets added to the DOM, reconciliation.
        })}
      </div>
    </>
  );
};

export default Body;
