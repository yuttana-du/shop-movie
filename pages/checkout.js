import React, { useState, useEffect } from "react";
import Router from "next/router";
import { useRecoilState } from "recoil";
import { useRecoilValue } from "recoil";

import Order from "../components/Order/Order";
import Summary from "../components/Summary";
import cartRecoil from "../store/cart";
import timeRecoil from "../store/time";

import Arrow from "../public/icons/leftarrow.svg";
import Add from "../public/icons/add.svg";

const CheckOut = () => {
  const [time, setTime] = useRecoilState(timeRecoil);
  const [minute, setMinute] = useState("5");
  const [second, setSecond] = useState("00");
  const [cart] = useRecoilState(cartRecoil);

  useEffect(() => {
    if (time < 1) {
      console.log("left to order");
    }
    setMinute(Math.floor(time / 60));
    if (time % 60 < 10) {
      setSecond("0" + (time % 60));
    } else {
      setSecond(time % 60);
    }

    const timer = setTimeout(() => {
      setTime(time - 1);
    }, 1000);

    if (time < 1) {
      clearTimeout(timer);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [time]);

  const handleClickIndex = () => {
    Router.push({ pathname: "/" });
  };

  return (
    <div className="h-screen flex flex-col justify-start font-body leading-A18 tracking-A8 mt-10">
      <div className="flex flex-row  justify-between items-center mx-5  ">
        <div className="cursor-pointer">
          <Arrow onClick={handleClickIndex} />
        </div>
        <h5 className=" text-font20 text-DeepGrey ">Express Cart</h5>
        <div className=""></div>
      </div>
      <hr className="mt-w15 mb-w38   mx-0" />
      <div className="mx-5">
        <div className="flex flex-row justify-between items-end mb-w5">
          <h5 className="text-font20 text-BlackTortoise font-medium">
            Your Order
          </h5>
          <div
            className="flex flex-row justify-end items-end text-text-sm text-RedVermilionBird font-semibold cursor-pointer"
            onClick={handleClickIndex}
          >
            Add items
            <div className="ml-1 relative mr-2.5">
              <Add className="absolute bottom-1" />
            </div>
          </div>
        </div>
        <div>
          <Order value={cart} />
          <Summary value={cart} minute={minute} second={second} />
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
