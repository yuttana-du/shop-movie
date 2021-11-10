const ButtonCheckOut = () => {
  const onClickCheckOut = () => {
    console.log("Begin Checkout");
  };

  return (
    <div
      className="flexflex-row justify-center items-center rounded-timer cursor-pointer bg-RedVermilionBird min-w-335  h-w58 py-5 mt-w35 mb-w39 leading-A18 tracking-A8"
      onClick={onClickCheckOut}
    >
      <h5 className=" flex flex-row justify-center items-center text-white font-body text-font20 font-bold">
        Begin Checkout
      </h5>
    </div>
  );
};
export default ButtonCheckOut;
