import { ApiResponse } from '../types'

export interface IProduct {
  product_id: string
  img: string
  name: string
  price: number
  shortDescription: string
  description: string
}

export enum ProductsUrls {
  GET_ALL_PRODUCTS = '/products'
}

export type ProductResponse = ApiResponse<IProduct[]>
