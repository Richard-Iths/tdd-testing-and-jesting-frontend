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
      product_id: 'knugen+',
      img: '/images/situation-sthlm-2007-2-12.jpeg',
      name: 'Situation STHLM',
      price: 100,
      shortDescription: 'Sällskapsliteratur. Upplaga 2007-2-12.',
      description: 'Knugen, vem fan är du?',
    },
    {
      product_id: 'oivjrfi8h03',
      img: '/images/jeans.jpg',
      name: 'Trasig jeansjacka',
      price: 500,
      shortDescription: 'Den har fler minnen än du har.',
      description: 'Den har varit med ett tag! Den har fler minnen än du har.',
    },
    {
      product_id: 'ofi3jf+',
      img: '/images/jeans.jpg',
      name: 'Hel jeansjacka',
      price: 1000,
      shortDescription: 'En fin jeansjacka',
      description: 'Riktig noob.',
    },
    {
      product_id: 'jnjnfjfnjf+',
      img: '/images/bottle.png',
      name: 'Vinflaska',
      price: 50,
      shortDescription: 'En fin vinflaska med stickande alkoholhalt. Minst sagt ett vin med hugg i!',
      description: 'Den har varit med ett tag! Den har fler minnen än du har.',
    },
  ];
};
