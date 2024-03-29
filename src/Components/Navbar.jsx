import React from 'react'
import "../App.css";
import { CiShoppingBasket } from "react-icons/ci";            
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className="p-6 border border-grayshade-300 bg-grayshade-500 w-full flex flex-wrap items-center justify-between mx-auto">
      <div className="w-full flex items-center justify-between">
        <h1 className="lg:text-5xl md:text-4xl text-white text-xl font-semibold">
          Dmen's Fashion
        </h1>
        <ul className='flex gap-10'>
          <Link to='/'>
            <li className=' hover:text-grayshade-50 cursor-pointer'>Home</li>
          </Link>
          <Link to='/aboutus'>
            <li className=' hover:text-grayshade-50 cursor-pointer'>About Us</li>
          </Link>
          <Link to='/profile'>
            <li className=' hover:text-grayshade-50 cursor-pointer'>Profile</li>
          </Link>
        </ul>
        <div className="flex justify-center items-center">
          <div className="relative lg:mx-6 md:mx-4 mx-3" to={"/checkout"}>
            <CiShoppingBasket className="text-4xl text-white bg-grayshade-400 border border-grayshade-200 p-1 rounded-md" />
            <span className="absolute text-sm -top-2 -right-2 p-1 w-5 h-5 text-center leading-none rounded-full bg-purpleshade-400 text-white">
              3
            </span>
          </div>
          <div className="lg:mx-6 md:mx-4 mx-3" href='www.github.com/Shinzo27'>
            <FaGithub className="text-4xl text-white bg-grayshade-400 border border-grayshade-200 p-1 rounded-md"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
