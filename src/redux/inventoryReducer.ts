import { Value } from './../../node_modules/@vercel/static-config/dist/swc.d';
import {
  getComputedProperties,
  updateProductReduce,
} from '../constants/helpers';

export type Product = {
  name: string;
  category: string;
  quantity: number;
  price: number;
  value: number;
  enable: boolean;
};
const initialState = {
  role: 'admin',
  products: [],
  totalProducts: 0,
  storeValue: 0,
  outOfStock: 0,
  noOfCategories: 0,
};

const inventoryReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return {
        ...state,
        products: [...action.payload],
        ...getComputedProperties(action.payload),
      };
    case 'TOGGLE_ROLE':
      return {
        ...state,
        role: state.role === 'admin' ? 'user' : 'admin',
      };
    case 'UPDATE_PRODUCT':
      return updateProductReduce(state, action.payload);
    case 'DELETE_PRODUCT':
      const updatedProducts = state.products.filter((product: Product) => {
        return (
          product.name !== action.payload.name &&
          product.category !== action.payload.category
        );
      });
      return {
        ...state,
        products: updatedProducts,
        ...getComputedProperties(updatedProducts),
      };
    default:
      return state;
  }
};

export default inventoryReducer;
