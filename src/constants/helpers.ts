import { Product } from '../redux/inventoryReducer';

export const getComputedProperties = (products: Product[]) => {
  const totalProducts = products.length;
  const storeValue = products.reduce(
    (acc, product) => acc + +product.value,
    0
  );
  const outOfStock = products.filter(product => product.quantity === 0).length;
  const noOfCategories = new Set(products.map(product => product.category))
    .size;

  return { totalProducts, storeValue, outOfStock, noOfCategories };
};

export const updateProductReduce = (state: any, payload: any) => {
  const updatedProducts = state.products.map((product: Product) => {
    if (
      product.name === payload.name &&
      product.category === payload.category
    ) {
      return {
        ...product,
        ...payload,
      };
    }
    return product;
  });

  return {
    ...state,
    products: updatedProducts,
    ...getComputedProperties(updatedProducts),
  }
};

export const sanitizeResponse = (products: any[]) => {
  return products.map(product => ({
    ...product,
    value: +product.value.slice(1),
    price: +product.price.slice(1),
    enable: true,
  }));
}
