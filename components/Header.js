import Timer from "./Timer";

const Header = ({ second, minute }) => {
  return (
    <div className="flex flex-row justify-between align-text-top mt-10 mb-w10 ">
      <div className="flex flex-col  tracking-A8 w-9/12">
        <h4 className="mb-2 font-header text-BlackTortoise text-header font-bold leading-A18 ">
          Search Movie
        </h4>
        <div className="w-full flex flex flex-row">
          <input className="bg-white border-2 border-solid rounded-timer border-RedVermilionBird box-border w-full mr-2" />
          <button className="border-solid rounded-md bg-RedVermilionBird box-border px-4 text-white">
            Search
          </button>
        </div>
      </div>
      <Timer minute={minute} second={second} />
    </div>
  );
};

export default Header;
