import { render } from '@testing-library/react'
import { shallow, render as enzymeRender, mount } from 'enzyme'
import { BrowserRouter } from 'react-router-dom'
import ProductCardComponent from '../components/cards/product-card.component'
import LandingPage from './landing.page'
import { IProduct } from '../models/product'
import axios from 'axios'

describe('landing.page.tsx', () => {
  jest.mock('axios')

  describe('smoke tests', () => {
    it('should render landing page', () => {
      render(
        <BrowserRouter>
          <LandingPage />
        </BrowserRouter>
      )
    })
    it('should render product-card component', () => {
      const fakeData: IProduct[] = [
        {
          description: 'amazing product',
          img: 'sko.gif',
          name: 'Trasiga skor',
          price: 150,
          product_id: '1',
          shortDescription: 'skor'
        }
      ]

      /*    const mockedAxios = axios as jest.Mocked<typeof axios>
      let data: object = {}
      const mockedPost = mockedAxios.get.mockReturnValueOnce(fakeData)
      expect(axios.post).toHaveBeenCalled()
 */
      jest.spyOn(axios, 'get').mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve({ data: fakeData })
        })
      )

      const wrapper = shallow(<LandingPage />)
      const productCard = wrapper.find(ProductCardComponent)
      expect(productCard.length).toBeGreaterThan(0)
    })
  })

  describe('black box tests', () => {})

  describe('white box tests', () => {})
})
