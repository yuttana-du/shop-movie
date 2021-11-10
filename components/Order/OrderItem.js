const OrderItem = ({ value }) => {
  return (
    <div className="mt-5" key={value.id}>
      <div className="flex flex-row justify-between ">
        <div className="flex flex-row ">
          <div className="flex flex-row justify-center items-center rounded-w3 text-normal font-bold bg-RedVermilionBird text-white w-w18 h-w18">
            {value.quantity}
          </div>
          <div className="flex flex-col  ml-2">
            <div className="text-normal font-medium text-BlackTortoise">
              {value.name}
            </div>
            <div className="text-about text-DeepGrey">{value.description}</div>
          </div>
        </div>
        <div className="text-normal">
          ${(value.quantity * value.price).toFixed(2)}
        </div>
      </div>
      <div className="mt-w15">
        <hr />
      </div>
    </div>
  );
};
export default OrderItem;
