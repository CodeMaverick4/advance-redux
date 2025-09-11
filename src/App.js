import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { loadCartItems } from './redux/slice/cartThunk';
import { useEffect } from 'react';

function App() {
  const cartStatus = useSelector(state => state.toogleCart)
  const totalItems =useSelector(state => state.cart.totalItems)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCartItems());
  }, [])
  return (
    <Layout>
      {cartStatus && totalItems >0 &&
        <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
