import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StoreType } from '../redux/store';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import TableHeaderChip from './TableHeaderChip';
import axios from 'axios';
import { Product } from '../redux/inventoryReducer';
import Actions from './Actions';
import { sanitizeResponse } from '../constants/helpers';

const MOCK_PRODUCTS = [
  {
    name: 'Bluetooth',
    category: 'Electronic',
    value: '$150',
    quantity: 5,
    price: '$30',
  },
  {
    name: 'Edifier M43560',
    category: 'Electronic',
    value: '0',
    quantity: 0,
    price: '$0',
  },
  {
    name: 'Sony 4k ultra 55 inch TV',
    category: 'Electronic',
    value: '$1190',
    quantity: 17,
    price: '$70',
  },
  {
    name: 'Samsumg 55 inch TV',
    category: 'Electronic',
    value: '$600',
    quantity: 50,
    price: '$12',
  },
  {
    name: 'samsumg S34 Ultra',
    category: 'phone',
    value: '$0',
    quantity: 0,
    price: '$0',
  },
];

const ListComponent = () => {
  const { products } = useSelector((state: StoreType) => state.inventory);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          'https://dev-0tf0hinghgjl39z.api.raw-labs.com/inventory'
        );
        dispatch({
          type: 'SET_PRODUCTS',
          payload: sanitizeResponse(response.data),
        });
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);
  console.log(products);
  return (
    <TableContainer
      component={Paper}
      sx={{
        backgroundColor: '#212124',
        color: '#FFF',
        '& .MuiTableCell-root': {
          color: '#FFF',
          borderColor: '#2E2E30',
        },
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <TableHeaderChip title={'Name'} />
            </TableCell>
            <TableCell>
              <TableHeaderChip title={'Category'} />
            </TableCell>
            <TableCell>
              <TableHeaderChip title={'Price'} />
            </TableCell>
            <TableCell>
              <TableHeaderChip title={'Quantity'} />
            </TableCell>
            <TableCell>
              <TableHeaderChip title={'Value'} />
            </TableCell>
            <TableCell>
              <TableHeaderChip title={'Action'} />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product: Product) => (
            <TableRow
              key={`${product.name}-${product.category}`}
              className={`${!product.enable ? 'disabled-row' : ''}`}
            >
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>${product.price}</TableCell>
              <TableCell>{product.quantity}</TableCell>
              <TableCell>${product.value}</TableCell>
              <TableCell>
                <Actions product={product} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {!products.length && (
        <div className='text-center p-3'>No products available</div>
      )}
    </TableContainer>
  );
};

export default ListComponent;
