import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  const cartStatus = useSelector(state => state.toogleCart)
  const totalItems =useSelector(state => state.cart.totalItems)
  return (
    <Layout>
      {cartStatus && totalItems >0 &&
        <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
