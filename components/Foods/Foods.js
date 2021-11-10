import React, { useState } from "react";
import { useRecoilState } from "recoil";

import cartRecoil from "../../store/cart";
import FoodItem from "./FoodItem";

import mock from "../../constant/mock";

const ListFood = ({ onAddCart, onHandlerCartQuantity, onDropCart }) => {
  const [cart] = useRecoilState(cartRecoil);

  return (
    <div className="overflow-y-auto">
      {mock.map((menu) => (
        <FoodItem
          key={menu.id}
          value={menu}
          onAddCart={onAddCart}
          onHandlerCartQuantity={onHandlerCartQuantity}
          onDropCart={onDropCart}
          cart={cart}
        />
      ))}
    </div>
  );
};

export default ListFood;
