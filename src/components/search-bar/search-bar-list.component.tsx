import React from 'react';
import { IProduct } from '../../models/product';
import {Link} from "react-router-dom"

export interface Props {
  products: Pick<IProduct,"img" | "name"| "product_id">[];
}

const SearchBarListComponent : React.FC<Props> = ({products}) => {
  return (<ul className="search-bar-list">
    {products.map(product => (
    <li className="search-bar-list__item" key={product.product_id}>
      <Link to={`/products/${product.product_id}`} data-test="product-link" className='search-bar-list__item-link'>
        <img src={product.img} alt={product.name} /> 
        <h4 className="search-bar-list__title">{product.name}</h4>
      </Link>
    </li>
    )
    )}
  </ul>)
}

export default SearchBarListComponent;