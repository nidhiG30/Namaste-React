import {useParams} from "react-router-dom"

const RestaurantMenu = () => {
  const {resId} = useParams(); // Dynamic Rounting: Destructured data returned by useParams()

  return (
    <div>
      <h1>Restaurant Id: {resId}</h1> {/* 'id' could be 'resId' */}
      <h2>Namaste</h2>
    </div>
  );
};

export default RestaurantMenu;
