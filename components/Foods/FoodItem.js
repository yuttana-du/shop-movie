import React, { useState, useEffect } from "react";
import Quantity from "../Quantity";
import ButtonAddFood from "../ButtonAddFood";

const Food = ({
  value,
  onAddCart,
  onHandlerCartQuantity,
  onDropCart,
  cart,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    if (cart.length) {
      const reQuantity = cart.find((items) => {
        return items.id === value.id;
      });

      setQuantity(reQuantity?.quantity);
      if (reQuantity?.quantity !== undefined) setIsAdded(true);
      if (reQuantity?.quantity === undefined) {
        setQuantity(1);
      }
    }
  }, []);

  const onAddQuantity = () => {
    setQuantity(quantity + 1);
    onHandlerCartQuantity(value.id, quantity + 1);
  };

  const onDropQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      onHandlerCartQuantity(value.id, quantity - 1);
    }
  };

  const onClickAdd = () => {
    setIsAdded(true);
    onAddCart(value, quantity);
  };

  const onClickUnAdd = () => {
    setIsAdded(false);
    onDropCart(value.id);
  };

  return (
    <div
      className="flex flex-row justify-between items-center  h-20 my-w15"
      key={value.id}
    >
      <div className="flex flex-row items-center">
        <div
          className={`h-20 w-20 bg-no-repeat bg-right bg-${value.picture} bg-Container rounded-timer mr-w22`}
        ></div>
        <div className="flex flex-col font-body leading-A18 tracking-A8">
          <p className=" text-normal font-medium text-BlackTortoise mb-w5">
            {value.name}
          </p>
          <span className=" text-about text-DeepGrey mb-2">
            {value.description}
          </span>
          <Quantity
            quantity={quantity}
            onAddQuantity={onAddQuantity}
            onDropQuantity={onDropQuantity}
          />
        </div>
      </div>
      <ButtonAddFood
        isAdded={isAdded}
        quantity={quantity}
        value={value}
        onClickAdd={onClickAdd}
        onClickUnAdd={onClickUnAdd}
      />
    </div>
  );
};

export default Food;
