import { useDispatch } from 'react-redux';
import classes from './CartButton.module.css';
import { toogleCart } from '../../redux/slice/toogleCartSlice';

const CartButton = (props) => {
  const dispatch = useDispatch();
  return (
    <button  onClick = {()=>dispatch(toogleCart())} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
