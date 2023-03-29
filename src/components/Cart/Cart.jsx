import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ cart }) => {
  let totalPrice = 0;
  let shipping = 0;
  for (const product of cart) {
    totalPrice += product.price;
    shipping += product.shipping;
  }
  const tax = (totalPrice * 5) / 100;
  const grandtotal = totalPrice + shipping + tax;

  return (
    <div>
      <h3 className="text-center text-xl font-semibold mb-4">Order Summary</h3>
      <div className="space-y-3">
        <p>Selected Items:- {cart.length}</p>
        <p>Total Price:- ${totalPrice}</p>
        <p>Total Shipping Charge:- ${shipping}</p>
        <p>Tax:- ${tax}</p>
        <h3 className="text-lg font-semibold">Grand Total:- ${grandtotal}</h3>
        <button
          type="button"
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-red-500 text-white gap-2 shadow-lg"
        >
          Clear Cart <FontAwesomeIcon icon={faTrash} />
        </button>

        <button
          type="button"
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-primary gap-2 shadow-lg"
        >
          Review Order <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default Cart;
