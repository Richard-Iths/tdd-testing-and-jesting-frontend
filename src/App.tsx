import React, { useEffect, useState } from 'react';
import LandingPage from './pages/landing.page';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { IProduct, ProductResponse, ProductsUrls, bootstrapData } from './models/product';
import Api from './api/rest.api';
import HeaderComponent from './components/app/header.component';
// import { Route, Routes } from "react-router-dom";

function App() {
  // <Route path="about" element={<About />} />
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const init = async () => {
      const api = new Api<ProductResponse>();
      try {
        const { data } = await api.getRequest(ProductsUrls.GET_ALL_PRODUCTS);
        setProducts(data.data);
      } catch (error) {}
    };
    if (process.env.NODE_ENV === 'production') {
      init();
    } else {
      setProducts(bootstrapData());
    }
  }, []);

  return (
    <div className="app">
      <HeaderComponent />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage products={products} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
