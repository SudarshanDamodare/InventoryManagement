import Widget from './Widget';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import CategoryIcon from '@mui/icons-material/Category';
import { useSelector } from 'react-redux';
import { StoreType } from '../redux/store';
const Widgets = () => {
  const { totalProducts, storeValue, outOfStock, noOfCategories } = useSelector(
    (state: StoreType) => state.inventory
  );

  return (
    <div className='widgets-container'>
      <Widget
        icon={<ShoppingCartIcon />}
        title={'Total product'}
        value={totalProducts}
      />
      <Widget
        icon={<CurrencyExchangeOutlinedIcon />}
        title={'Total store value'}
        value={storeValue}
      />
      <Widget
        icon={<RemoveShoppingCartIcon />}
        title={'Out of stocks'}
        value={outOfStock}
      />
      <Widget
        icon={<CategoryIcon />}
        title={'No of category'}
        value={noOfCategories}
      />
    </div>
  );
};

export default Widgets;
