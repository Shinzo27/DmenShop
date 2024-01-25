import React, { useEffect, useState } from 'react'
import Product from './Product'
import SearchBar from './SearchBar'
import Shimmer from './Shimmer'

const ProductContainer = () => {
  const [Products, setProducts] = useState([])

  useEffect(()=>{
    getRestaurants()
  }, []);


  async function getRestaurants() {
    const data = await fetch(
        'https://api.escuelajs.co/api/v1/products'
    );

    const json = await data.json();
    console.log(json)
    setProducts(json);
  }

  return Products.length === 0 ? (<Shimmer/>) : (
    <div className='flex flex-wrap gap-5 justify-center md: mx-3 mb-10'>
        {
          Products.slice(0,20).map((product)=>{
            return (
              <Product {...product} key={product.id}/>
            )
          })
        }
    </div>
  )
}

export default ProductContainer
