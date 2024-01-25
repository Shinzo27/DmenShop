import React from 'react'
import Product from './Product'
import SearchBar from './SearchBar'

const ProductContainer = () => {
  return (
    <div className='flex flex-wrap gap-5 justify-center md: mx-3'>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
    </div>
  )
}

export default ProductContainer
