import React from 'react';
import logo from '../../images/Logo.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (
      <>
        <div className="bg-slate-900 text-white flex justify-between items-center px-20 py-4 sticky top-0">
          <img src={logo} alt="" />
          <div className="space-x-8 text-lg">
            <a href="#">
              Shop <FontAwesomeIcon icon={faShoppingCart} />
            </a>
            <a href="#">Order</a>
            <a href="#">Order Review</a>
            <a href="#">Manage Inventory</a>
            <a href="#">Login</a>
          </div>
        </div>
      </>
    );
};

export default Header;