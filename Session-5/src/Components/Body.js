const Body = () => {
  return (
    <div className='restaurant-list'>
      {restaurantList.map(restaurant => {
        return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />; // Here the "key" remains unique for every element that gets added to the DOM, reconciliation.
      })}
    </div>
  );
};

export default Body;