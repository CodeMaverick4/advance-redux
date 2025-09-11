import { useDispatch } from 'react-redux';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { addItem } from '../../redux/slice/cartSlice';
import axios from 'axios';

const ProductItem = (props) => {
  const { title, price, description } = props;
  const itemObj = { title: title, price: price, quantity: 1, total: price * 1, description: description }
  const dispatch = useDispatch();

  const handleAddItem = async ()=>{ 
    try{
      const res = await axios.post('https://todo-app-75d12-default-rtdb.firebaseio.com/cart.json',itemObj);
      dispatch(addItem({ item: {...itemObj} }))

      console.log("item successfully added.",res.data.name);
    }catch(err){
      alert(err.message);
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={handleAddItem}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
