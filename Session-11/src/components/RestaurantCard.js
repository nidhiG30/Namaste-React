import { IMG_CDN_URL } from '../config';
import { useContext } from 'react';
import UserContext from '../utils/UserContext';

const RestaurantCard = ({ name, cuisines, avgRating, cloudinaryImageId }) => {
  const {user} = useContext(UserContext)
  return (
    <div className='w-56 p-2 m-2 shadow-lg bg-pink-50'>
      <img
        src={
          IMG_CDN_URL +
          cloudinaryImageId
        }
      />
      <h2 className='font-bold text-xl'>{name}</h2>
      <h3>{cuisines.join(', ')}</h3>
      <h4>{avgRating} Stars</h4>
      <h5 className='font-bold'>{user.name} - {user.email}</h5> {/* 'user' object present in context of UserContext file has name property */}
    </div>
  );
};

export default RestaurantCard;