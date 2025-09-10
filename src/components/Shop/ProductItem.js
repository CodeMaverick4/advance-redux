import { useDispatch } from 'react-redux';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { addItem } from '../../redux/slice/cartSlice';

const ProductItem = (props) => {
  const { title, price, description } = props;
  const itemObj = { title: title, price: price, quantity: 1, total: price * 1, description: description }
  const dispatch = useDispatch();
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={() => dispatch(addItem({ item: itemObj }))}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
