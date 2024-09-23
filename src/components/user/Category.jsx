import React from "react";
import fashion from "./../../assets/fashion.webp";
import beauty from "./../../assets/beauty.webp";
import electronics from "./../../assets/electronics.webp";
import footwear from "./../../assets/footwear.webp";
import laptop from "./../../assets/laptop.webp";
import mobile from "./../../assets/mobile.webp";
import { Tooltip as ReactTooltip } from "react-tooltip";

const Category = () => {
  return (
    <div className="flex justify-center items-center gap-4 flex-wrap">
      <img
        src={fashion}
        alt=""
        className="w-24 hover:scale-110"
        data-tooltip-id="my-tooltip-1"
      />
      <img
        src={mobile}
        alt=""
        className="w-24 hover:scale-110"
        data-tooltip-id="my-tooltip-2"
      />
      <img
        src={beauty}
        alt=""
        className="w-24 hover:scale-110"
        data-tooltip-id="my-tooltip-3"
      />
      <img
        src={electronics}
        alt=""
        className="w-24 hover:scale-110"
        data-tooltip-id="my-tooltip-4"
      />
      <img
        src={footwear}
        alt=""
        className="w-24 hover:scale-110"
        data-tooltip-id="my-tooltip-5"
      />
      <img
        src={laptop}
        alt=""
        className="w-24 hover:scale-110"
        data-tooltip-id="my-tooltip-6"
      />

      <ReactTooltip id="my-tooltip-1" place="bottom" content="Fashion" />
      <ReactTooltip id="my-tooltip-2" place="bottom" content="Mobile" />
      <ReactTooltip id="my-tooltip-3" place="bottom" content="Beauty" />
      <ReactTooltip id="my-tooltip-4" place="bottom" content="Electronics" />
      <ReactTooltip id="my-tooltip-5" place="bottom" content="Footwear" />
      <ReactTooltip id="my-tooltip-6" place="bottom" content="Laptop" />
    </div>
  );
};

export default Category;
