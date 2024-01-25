import React from 'react'

const Product = () => {
  return (
    <div className="max-w-sm border rounded-lg shadow border-gray-700">
    <a href="#">
        <img className="rounded-lg" src="https://i.imgur.com/1twoaDy.jpeg" alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Handcrafted Frozen Ball</h5>
        </a>
        <p className="mb-4 text-sm text-gray-400">New range of formal shirt ...</p>
        <div className='flex justify-between items-center'>
        <p className="text-xl font-bold text-white">$ 35</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap='round' strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
        </div>
    </div>
</div>
  )
}

export default Product
