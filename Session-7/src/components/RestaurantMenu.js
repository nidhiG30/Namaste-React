import { useEffect } from "react";
import {useParams} from "react-router-dom"

const RestaurantMenu = () => {
  // How to read dynamic URL params
  const {resId} = useParams();

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=21.1189882&lng=79.04192739999999&menuId=359586");
    const json = await data.json();
    console.log(json);
  }

  return (
    <div>
      <h1>Restaurant Id: {resId}</h1> {/* 'id' could be 'resId' */}
      <h2>Namaste</h2>
    </div>
  );
};

export default RestaurantMenu;
