import { useSelector } from 'react-redux';
import FoodItem from './FoodItem';

const Cart = () => {
  const cartItems = useSelector(store => store.cart.items);

  return (
    <div>
      <h1 className='font-bold text-3xl'>Cart Items - {cartItems.length}</h1>
      <div className='flex'>
        {cartItems.map(item => (
          <FoodItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
