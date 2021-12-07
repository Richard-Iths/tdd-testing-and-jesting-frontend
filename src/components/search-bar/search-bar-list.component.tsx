import React from 'react';
import { IProduct } from '../../models/product';
import {Link} from "react-router-dom"
import "./search-bar-list.styles.scss"
export interface Props {
  products: Pick<IProduct,"img" | "name"| "product_id">[];
}

const SearchBarListComponent : React.FC<Props> = ({products}) => {
  return (<ul className="search-bar-list">
    {products.map(product => (
    <li className="search-bar-list__item" key={product.product_id}>
      <Link className="search-bar-list__link" to={`/products/${product.product_id}`} data-test="product-link" >
        <img className="search-bar-list__img" src={product.img} alt={product.name} /> 
        <h4 className="search-bar-list__title">{product.name}</h4>
      </Link>
    </li>
    )
    )}
  </ul>)
}

export default SearchBarListComponent;