import { useEffect, useState } from "react";

import ButtonCheckOut from "./ButtonCheckOut";
import UnderLine from "../public/icons/underline.svg";

const Summary = ({ value }) => {
  console.log("value", value);
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(0);
  let sumOrder = 0;
  (() => {
    value.map((valueMap) => {
      const test = valueMap.price * valueMap.quantity;
      sumOrder = sumOrder + test;
      return valueMap;
    });
  })();

  useEffect(() => {
    const totalQuantity = value.reduce((acc, cur) => acc + cur.quantity, 0);

    const discountValue =
      totalQuantity > 6
        ? sumOrder * 0.2
        : totalQuantity > 3
        ? sumOrder * 0.1
        : 0;
    setTotal(totalQuantity);
    setDiscount(discountValue);
  }, []);
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between items-end mb-5">
        <div className="flex flex-col justify-end">
          <h5 className="text-font20 text-BlackTortoise font-semibold ">
            Summary
          </h5>
          <UnderLine className="mt-1" />
        </div>
      </div>
      <div className="flex flex-row justify-center items-center rounded-timer bg-Container h-12 mb-5">
        <div className="bg-take-out-icon h-w22 w-w22 mr-2"></div>
        <p className="text-normal text-BlackTortoise ">
          Earn credits by playing trivia after checkout!
        </p>
      </div>
      <div className="text-DeepGrey text-normal">
        <div className="flex flex-row justify-between items-center ">
          <div className="">Subtotal</div>
          <div>${sumOrder.toFixed(2)}</div>
        </div>
        <hr className="my-w10" />
        <div className="flex flex-row justify-between items-center ">
          <div>Discount {total > 6 ? "20%" : total > 3 ? "10%" : "0%"}</div>
          <div>${discount}</div>
        </div>

        <hr className="my-w10" />
        <div className="flex flex-row justify-between items-center text-font18 text-BlackTortoise font-semibold   mt-5 ">
          <div>Total</div>
          <div>${(sumOrder - discount).toFixed(2)}</div>
        </div>
        <ButtonCheckOut />
      </div>
    </div>
  );
};

export default Summary;
