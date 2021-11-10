import Timer from "./Timer";
import ButtonCheckOut from "./ButtonCheckOut";
import UnderLine from "../public/icons/underline.svg";

const Summary = ({ value, minute, second }) => {
  let sumOrder = 0;
  (() => {
    value.map((valueMap) => {
      const test = valueMap.price * valueMap.quantity;
      sumOrder = sumOrder + test;
      return valueMap;
    });
  })();
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between items-end mb-5">
        <div className="flex flex-col justify-end">
          <h5 className="text-font20 text-BlackTortoise font-semibold ">
            Summary
          </h5>
          <UnderLine className="mt-1" />
        </div>
        <Timer minute={minute} second={second} />
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
          <div>Delivery Fee</div>
          <div>$1.99</div>
        </div>
        <hr className="my-w10" />
        <div className="flex flex-row justify-between items-center ">
          <div>Taxes</div>
          <div>$1.48</div>
        </div>
        <hr className="my-w10" />
        <div className="flex flex-row justify-between items-center text-font18 text-BlackTortoise font-semibold   mt-5 ">
          <div>Total</div>
          <div>${(sumOrder + 1.99 + 1.48).toFixed(2)}</div>
        </div>
        <ButtonCheckOut />
      </div>
    </div>
  );
};

export default Summary;
