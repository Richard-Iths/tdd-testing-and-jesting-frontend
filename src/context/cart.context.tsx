import React, { createContext, useState } from 'react';
import { IProduct } from '../models/product';

export type Cart = IProduct & {
  amount: number;
};

export enum UpdateType {
  INCREMENT = 'increment',
  DECREMENT = 'decrement',
}

interface Context {
  cart: Cart[];
  addCartItem: (product: IProduct) => void;
  getCart: () => IProduct[];
  updateCartItem: (productId: string, action: UpdateType) => void;
}

const CartContext = createContext<Context>({
  cart: [],
  addCartItem: (product: IProduct) => {},
  getCart: () => [],
  updateCartItem: (productId: string, action: UpdateType) => {},
});

export const CartContextProvider: React.FC = ({ children }) => {
  const [cart, addCartItems] = useState<Cart[]>([]);

  const addCartItem = (newProduct: IProduct): void => {
    const existingProduct = cart.find((product) => product.product_id === newProduct.product_id);
    if (existingProduct) {
      // addCartItems([...cart, { ...existingProduct, amount: existingProduct.amount + 1 }]);
      existingProduct.amount = existingProduct.amount + 1;
    } else {
      addCartItems([...cart, { ...newProduct, amount: 1 }]);
    }
  };
  const getCart = (): IProduct[] => [...cart];

  const updateCartItem = (productId: string, action: UpdateType) => {
    switch (action) {
      case UpdateType.INCREMENT: {
        const existingProduct = cart.find((product) => product.product_id === productId);
        if (existingProduct) {
          existingProduct.amount = existingProduct.amount + 1;
        }
        break;
      }
      case UpdateType.DECREMENT: {
        const existingProduct = cart.find((product) => product.product_id === productId);
        if (existingProduct && existingProduct.amount - 1 !== 0) {
          existingProduct.amount = existingProduct.amount - 1;
        } else {
          addCartItems([...cart.filter((product) => product.product_id !== productId)]);
        }
      }
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addCartItem,
        getCart,
        updateCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
