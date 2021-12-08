import React, { createContext, useState } from 'react';
import { IProduct } from '../models/product';

interface Context {
  cart: IProduct[];
  addProduct: (product: IProduct) => void;
  getCart: () => IProduct[];
}

const CartContext = createContext<Context>({
  cart: [],
  addProduct: (product: IProduct) => {},
  getCart: () => [],
});

export const CartContextProvider: React.FC = ({ children }) => {
  const [cart, addCartItem] = useState<IProduct[]>([]);

  const addProduct = (product: IProduct): void => {
    return addCartItem([...cart, { ...product }]);
  };
  const getCart = (): IProduct[] => [...cart];

  return (
    <CartContext.Provider
      value={{
        cart,
        addProduct,
        getCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
