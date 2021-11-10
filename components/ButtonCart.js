import { useState, useEffect } from "react";
import Router from "next/router";
import SymbolCart from "../public/icons/cart.svg";

const Cart = ({ isOpen, cart }) => {
  const handleClickIndex = () => {
    Router.push({ pathname: "/checkout" });
  };

  return (
    <div
      className={`
      ${
        isOpen ? "flex" : "hidden"
      } flex-row justify-center items-center rounded-timer cursor-pointer bg-RedVermilionBird min-w-335  h-w58 py-5 mt-w35 mb-w39 leading-A18 tracking-A8`}
      onClick={handleClickIndex}
    >
      <h5
        className={
          " flex flex-row justify-center items-center text-white font-body text-font20 font-bold"
        }
      >
        View Cart - $
        {cart
          .reduce((acc, cur) => acc + cur.quantity * cur.price, 0)
          .toFixed(2)}{" "}
        <div className="flex flex-row justify-center items-center relative">
          <SymbolCart className="ml-1" />
          <div className="flex flex-row justify-center items-center text-cartNumber rounded-xl font-cart absolute  -top-0.5 left-6  bg-white font-bold w-w12 h-w12 text-RedVermilionBird">
            {cart.reduce((acc, cur) => acc + cur.quantity, 0)}
          </div>
        </div>
      </h5>
    </div>
  );
};

export default Cart;
