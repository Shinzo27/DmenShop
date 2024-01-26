import React, { useEffect, useState } from "react";
import Product from "./Product";
import Shimmer from "./Shimmer";
import { CiSearch } from "react-icons/ci";

function filterData(searchText, products){
  const filterData = products.filter( (product) =>
      product.title.toLowerCase().includes(searchText.toLowerCase())
  )
  // console.log(filterData)
  return filterData;
}

const ProductContainer = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    const data = await fetch("https://api.escuelajs.co/api/v1/products");
    const json = await data.json();
    // console.log(json)
    setAllProducts(json);
    setFilterProducts(json);
  }

  return allProducts.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div>
        <div className="relative my-10 pl-3">
          <div className="absolute z-2 cursor-pointer inset-y-0 start-0 flex items-center ps-3">
            <CiSearch
              className="m-2 bg-purpleshade-400 p-1 w-7 h-7 text-white rounded-lg"
              onClick={() => {
                const data = filterData(searchText, allProducts);
                setFilterProducts(data);
              }}
            />
          </div>
          <input
            className="block z-1 lg:w-1/3 md:w-2/4 w-full p-4 ps-12 text-sm outline-none border rounded-lg bg-grayshade-500 border-grayshade-100 placeholde-grayshade-50 text-white focus:ring-purpleshade-400 focus:border-purpleshade-400"
            placeholder="Search ..." value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-5 justify-center md: mx-3 mb-10">
        {filterProducts.slice(0, 20).map((product) => {
          return <Product {...product} key={product.id} />;
        })}
      </div>
    </>
  );
};

export default ProductContainer;
