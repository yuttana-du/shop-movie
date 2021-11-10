import { useRecoilState } from "recoil";
import cartRecoil from "../store/cart";

const Header = () => {
  const [cart, setCart] = useRecoilState(cartRecoil);
  const onClickClearCart = () => {
    setCart([]);
  };

  return (
    <div className="flex flex-row justify-between align-text-top mt-10 mb-w10 ">
      <div className="flex flex-col  tracking-A8 w-9/12">
        <h4 className="mb-2 font-header text-BlackTortoise text-header font-bold leading-A18 ">
          Search Movie
        </h4>
        <div className="w-full flex flex flex-row">
          <input className="bg-white border-2 border-solid rounded-timer border-RedVermilionBird box-border px-2 w-full mr-2" />
          <button className="border-solid rounded-md bg-RedVermilionBird box-border px-4 text-white">
            Search
          </button>
        </div>
      </div>
      <button
        className="border-solid rounded-md bg-gray-800 box-border px-4 text-white h-w28"
        onClick={onClickClearCart}
      >
        Clear Cart
      </button>
    </div>
  );
};

export default Header;
