import OrderItem from "./OrderItem";

const Order = ({ value }) => {
  return (
    <div>
      <div className="flex flex-col  mb-w35">
        {value.map((valueMap) => (
          <OrderItem value={valueMap} key={valueMap.id} />
        ))}
      </div>
    </div>
  );
};

export default Order;
