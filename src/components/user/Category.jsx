import React from "react";
import fashion from "./../../assets/fashion.webp";
import beauty from "./../../assets/beauty.webp";
import electronics from "./../../assets/electronics.webp";
import footwear from "./../../assets/footwear.webp";
import laptop from "./../../assets/laptop.webp";
import mobile from "./../../assets/mobile.webp";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { Navigate, useNavigate } from "react-router-dom";

const Category = () => {
  const navigate = useNavigate();
  const handleSearchCategory = (category) => {
    navigate(`/search/${category}`);
  }
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <img
        src={fashion}
        alt=""
        className="w-24 hover:scale-110"
        data-tooltip-id="my-tooltip-1"
        onClick={() => handleSearchCategory("fashion")}
      />
      <img
        src={mobile}
        alt=""
        className="w-24 hover:scale-110"
        data-tooltip-id="my-tooltip-2"
        onClick={() => handleSearchCategory("mobile")}
      />
      <img
        src={beauty}
        alt=""
        className="w-24 hover:scale-110"
        data-tooltip-id="my-tooltip-3"
        onClick={() => handleSearchCategory("beauty")}
      />
      <img
        src={electronics}
        alt=""
        className="w-24 hover:scale-110"
        data-tooltip-id="my-tooltip-4"
        onClick={() => handleSearchCategory("electronics")}
      />
      <img
        src={footwear}
        alt=""
        className="w-24 hover:scale-110"
        data-tooltip-id="my-tooltip-5"
        onClick={() => handleSearchCategory("footwear")}
      />
      <img
        src={laptop}
        alt=""
        className="w-24 hover:scale-110"
        data-tooltip-id="my-tooltip-6"
        onClick={() => handleSearchCategory("laptop")}
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
