import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Products = (props) => {
    const { img, name, price, seller, ratings, stock } = props.product
    const addTocart = props.handleCart;
    
    return (
      <>
        <div className="max-w-xs rounded-lg bg-white shadow-lg relative">
          <img
            src={img}
            alt=""
            className="object-cover object-center w-full rounded-lg h-72 dark:bg-gray-800"
          />
          <div className="flex justify-end items-center m-3 gap-2">
            <span className="text-rose-500 font-semibold">In Stock Available</span>
            <span className="badge badge-success text-white">{stock}</span>
          </div>
          <div className="flex flex-col justify-between p-6 space-y-6">
            <div className="space-y-2 mb-8">
              <h2 className="text-xl font-semibold">{name}</h2>
              <h4 className="font-semibold text-md">Price: ${price}</h4>
              <h5>Manufacture: {seller}</h5>
              <p>Rating: {ratings}</p>
            </div>
            <button onClick={() => addTocart(props.product)}
              type="button"
              className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-red-300 gap-2 absolute left-0 bottom-0"
            >
              Add To Cart <FontAwesomeIcon icon={faShoppingCart} />
            </button>
          </div>
        </div>
      </>
    );
};

export default Products;