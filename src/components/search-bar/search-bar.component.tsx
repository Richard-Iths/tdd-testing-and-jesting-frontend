import React, { useState } from 'react';
import { IProduct } from '../../models/product';
import SearchBarListComponent from './search-bar-list.component';
import "./search-bar.styles.scss";
export interface Props {
  products: IProduct[];
}

const SearchBarComponent: React.FC<Props> = ({ products }) => {
  const [searchArr, setSearchArr] = useState<IProduct[]>([]);
  const searchOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    if (target.value.length >= 3) {
      setSearchArr(products.filter((product) => product.name.includes(e.target.value)));
    } else {
      setSearchArr([]);
    }
  };
  return (
    <section className="search-bar">
      <input
        className={`search-bar__input ${searchArr.length > 0 ? 'border-radius-top' : 'border-radius'}`}
        type="text"
        name="search-bar"
        id="search-bar"
        placeholder="search"
        data-test="search-input"
        onChange={searchOnChange}
      />
      {searchArr.length > 0 && <SearchBarListComponent products={searchArr} />}
    </section>
  );
};

export default SearchBarComponent;
