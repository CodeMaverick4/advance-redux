import { useDispatch } from 'react-redux';
import classes from './CartItem.module.css';
import { decrementQuantityBy1, incrementQuantityBy1, removeItem } from '../../redux/slice/cartSlice';
import { deleteCartItems, incrementCartItems, updateCartItem } from '../../redux/slice/cartThunk';

const CartItem = (props) => {

  const { title, quantity, total, price, id } = props.item;

  const dispatch = useDispatch();

  const handleDecrement = () => {
    if (quantity === 1) {
      dispatch(deleteCartItems(id))
    }
    else {
      dispatch(updateCartItem(false, { ...props.item, quantity: props.item.quantity - 1 }));
    }
  }

  return (
    <li key={id} className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${(price*quantity).toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handleDecrement}>-</button>
          <button onClick={() => dispatch(updateCartItem(true, { ...props.item, quantity: props.item.quantity + 1 }))}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
