import React, { useEffect, useState } from "react";
import Products from "../Products/Products";
import Cart from "../Cart/Cart";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleCart = (cartProduct) => {
    const newCart = [...cart, cartProduct];
    setCart(newCart);
  };

  return (
    <div>
      <div className="shop-container grid grid-cols-2 md:grid-cols-12">
        <div className="product-container md:col-span-9 sm:px-0 md:px-20 py-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Products
              product={product}
              key={product.id}
              handleCart={handleCart}
            ></Products>
          ))}
        </div>

        <div className="cart-container col-span-3 p-8 bg-green-300 h-96 my-10 mx-6 rounded-xl shadow-lg sticky top-24">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
