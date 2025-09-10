import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { toogleCart } from '../../redux/slice/toogleCartSlice';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const total = useSelector(state=>state.cart.totalItems)
  console.log(total)
  return (
    <button  onClick = {()=>dispatch(toogleCart())} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{total}</span>
    </button>
  );
};

export default CartButton;
