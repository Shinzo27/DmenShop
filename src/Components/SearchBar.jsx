import React from 'react'
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <>
        <div>
            <div className="relative my-10 pl-3">
                <div className="absolute z-2 cursor-pointer inset-y-0 start-0 flex items-center ps-3">
                <CiSearch
                    className="m-2 bg-purpleshade-400 p-1 w-7 h-7 text-white rounded-lg"
                />
                </div>
                <input
                className="block z-1 lg:w-1/3 md:w-2/4 w-full p-4 ps-12 text-sm outline-none border rounded-lg bg-grayshade-500 border-grayshade-300 placeholde-grayshade-50 text-white focus:ring-purpleshade-400 focus:border-purpleshade-400"
                placeholder="Search ..."
                />
            </div>
        </div>
    </>
  )
}

export default SearchBar
