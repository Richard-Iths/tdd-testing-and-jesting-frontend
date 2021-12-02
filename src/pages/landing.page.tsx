import React, { useEffect, useState } from 'react'
import ProductCardComponent from '../components/cards/product-card.component'
import { IProduct, ProductResponse, ProductsUrls } from '../models/product'
import Api from '../api/rest.api'

const LandingPage: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([])

  useEffect(() => {
    const init = async () => {
      const api = new Api<ProductResponse>()
      const { data } = await api.getRequest(ProductsUrls.GET_ALL_PRODUCTS)
      setProducts(data.data)
    }
    init()
  }, [])

  return (
    <section className="products-section">
      {products.map(product => (
        <ProductCardComponent key={product.product_id} {...product} />
      ))}
    </section>
  )
}

export default LandingPage
