const useRestaurant = (resId) => {
  // Create & maintain state for fectching data logic
  const [restaurant, setRestaurant] = useState(null);

  // Get data from API
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      'https://www.swiggy.com/dapi/menu/v4/full?lat=21.1189882&lng=79.04192739999999&menuId='+resId // fetching dynamic restaurant ID
    );
    const json = await data.json();
    console.log(json.data);
    setRestaurant(json.data);
  }

  // Return retaurant data
  return restaurant;

}

export default useRestaurant;