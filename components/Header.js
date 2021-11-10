import Timer from "./Timer";

const Header = ({ second, minute }) => {
  return (
    <div className="flex flex-row justify-between align-text-top mt-10 mb-w10 ">
      <div className="flex flex-col  tracking-A8">
        <h4 className="mb-2 font-header text-BlackTortoise text-header font-bold leading-A18 ">
          Express Items
        </h4>
        {/* ไม่มีฟอนต์ของheader  ด้านล่างความสูงยังไม่30px*/}
        <div className="font-body text-about text-DeepGrey leading-A15 min-w-212">
          Order up to 8 of these items from{" "}
          <u className="text-RedVermilionBird font-semibold">Katsuei</u> and
          receive your order by{" "}
          <span className="text-BlackTortoise font-semibold">10:00pm</span>
        </div>
      </div>
      <Timer minute={minute} second={second} />
    </div>
  );
};

export default Header;
