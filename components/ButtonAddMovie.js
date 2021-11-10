import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import mock from "../constant/mock";
import Cross from "../public/icons/cross.svg";

const ButtonAddMovie = ({
  isAdded,
  quantity,
  value,
  onClickAdd,
  onClickUnAdd,
}) => {
  return (
    <button
      className={`flex flex-row justify-center items-center rounded-timer cursor-pointer ${
        isAdded
          ? "bg-SoftPink"
          : value.price <= 0
          ? "cursor-not-allowed bg-gray-400"
          : "bg-RedVermilionBird"
      } min-w-88 w-w88 h-w38 my-w10 leading-A18 tracking-A8 `}
      onClick={isAdded ? onClickUnAdd : onClickAdd}
      disabled={value.price <= 0 ? true : false}
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
          `Add `
        )}
      </div>
    </button>
  );
};

export default ButtonAddMovie;
