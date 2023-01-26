import {useParams} from "react-router-dom"

const RestaurantMenu = () => {
  const {id} = useParams(); // Destructured data returned by useParams()

  return (
    <div>
      <h1>Restaurant Id: {id}</h1>
      <h2>Namaste</h2>
    </div>
  );
};

export default RestaurantMenu;
