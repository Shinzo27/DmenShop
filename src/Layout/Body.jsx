import React from 'react'
import ProductContainer from '../Components/ProductContainer'
import useOnline from '../Utils/useOnline'
  
const Body = () => {

  const isOnline = useOnline();

  if(!isOnline) return <h1 className=' m-10 text-center text-5xl'>You are offline!🔴</h1>
  return (
    <div>
      <ProductContainer/>
    </div>
  )
}

export default Body
