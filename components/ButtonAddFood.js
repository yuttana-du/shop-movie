import React, { useState, useEffect } from "react";
import mock from "../constant/mock";
import Cross from "../public/icons/cross.svg";

const ButtonAddFood = ({
  isAdded,
  quantity,
  value,
  onClickAdd,
  onClickUnAdd,
}) => {
  const [colors, setColors] = useState("bg-RedVermilionBird");
  useEffect(() => {
    if (isAdded) {
      setColors("bg-SoftPink");
    } else {
      setColors("bg-RedVermilionBird");
    }
  }, [isAdded]);

  return (
    <div
      className={`flex flex-row justify-center items-center rounded-timer cursor-pointer ${colors} min-w-88 w-w88 h-w38 my-w10 leading-A18 tracking-A8`}
      onClick={isAdded ? onClickUnAdd : onClickAdd}
    >
      <div
        className={`text-${
          isAdded ? "brow" : "white"
        } font-body text-normal font-bold`}
      >
        {isAdded ? (
          <span className="flex items-center">
            <Cross className="mr-1" /> Added {quantity}
          </span>
        ) : (
          `Add ${value.price}`
        )}
      </div>
    </div>
  );
};

export default ButtonAddFood;
