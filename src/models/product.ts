import { ApiResponse } from '../types';

export interface IProduct {
  product_id: string;
  img: string;
  name: string;
  price: number;
  shortDescription: string;
  description: string;
}

export enum ProductsUrls {
  GET_ALL_PRODUCTS = '/products',
}

export type ProductResponse = ApiResponse<IProduct[]>;

export const bootstrapData = (): IProduct[] => {
  return [
    {
      product_id: '1o3ifh04h9',
      img: '/images/jeans.jpg',
      name: 'Trasig skjorta',
      price: 250,
      shortDescription: 'En fin skjorta',
      description: 'Den har varit med ett tag! Den har fler minnen än du har.',
    },
    {
      product_id: 'oivjrfi8h03',
      img: '/images/jeans.jpg',
      name: 'Trasig jeansjacka',
      price: 500,
      shortDescription: 'En fin jeansjacka',
      description: 'Den har varit med ett tag! Den har fler minnen än du har.',
    },
  ];
};
