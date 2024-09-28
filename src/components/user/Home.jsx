import React, { useEffect, useState } from "react";
import Category from "./Category";
import hero from "./../../assets/hero.jpg";
import goldphone from "./../../assets/GoldPhone-1-300x300.webp";
import redmi from "./../../assets/redmi-300x300.webp";
import ban1 from "./../../assets/ban-1.png";
import ban2 from "./../../assets/ban-2.png";
import ban3 from "./../../assets/ban-3.png";
import ban4 from "./../../assets/ban-4.png";
import ban5 from "./../../assets/ban-5.png";
import ban6 from "./../../assets/ban-6.png";
import ban7 from "./../../assets/ban-7.png";
import HomeBannerSlider from "./HomeBannerSlider";
import img1 from "./../../assets/slider-img-1.png";
import img2 from "./../../assets/slider-img-2.webp";
import img3 from "./../../assets/slider-img-3.png";
import deal_camera from "./../../assets/cameras-2.webp";
import deal_smartphone from "./../../assets/Desktop-2.webp";
import deal_laptop from "./../../assets/laptop-2.webp";
import { Flame, Search } from "lucide-react";
import Slider3 from "../Slider3";
import slid1 from "./../../assets/HP_TOPBANNER_3_2_NNNOW_BestsellersUpto50Off_10-09-2024-DSK.jpg";
import slid2 from "./../../assets/HP_TOPBANNER_3_3_NNNOW_FOOTWEARUPTO60_20-09-2024-dsk.jpg";
import slid3 from "./../../assets/HP_TOPSTRIP_1_1_NNNOW_WEEKENDSALEUPTO60OFF_LastDay_23-09-2024-DSK.jpg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import ProductCard from "../ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [apple, setApple] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const [bestsellers, setBestsellers] = useState([]);
  const [newProduct, setNewPRoduct] = useState([]);
  const [mobile, setMobile] = useState([]);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const getProducts = async () => {
    try {
      const { data } = await axios.get(
        "https://amazon-devtown-backend.onrender.com/api/product/list_products"
      );
      setProducts(data.products);
      const filteredBestsellers = data.products.filter(
        (product) => product.bestseller
      );
      const filteredNewProducts = data.products.filter(
        (product) => product.discount === 0
      );
      const filteredMobile = data.products.filter(
        (product) => product.category === "mobile"
      );
      setMobile(filteredMobile);
      setBestsellers(filteredBestsellers);
      setNewPRoduct(filteredNewProducts);
    } catch (error) {
      console.log(error);
    }
  };

  const searchByBrand = async () => {
    try {
      const { data } = await axios.get(
        `https://amazon-devtown-backend.onrender.com/api/product/search/brand/apple`
      );
      console.log(data);
      setApple(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = () => {
    navigate(`/search/${searchValue}`);
  };

  useEffect(() => {
    searchByBrand();
  }, []);

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <div
        className=""
        style={{
          backgroundImage: `url(${hero})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="flex justify-between items-center px-[8vw]  mb-20 flex-col md:flex-col lg:flex-row">
          <div className="text-white">
            <div className="pt-28">
              <Category />
            </div>
            <h1 className="mt-10 text-2xl md:text-4xl">
              OVER <span className="text-5xl jost md:text-7xl">1 MILION</span>
            </h1>
            <p>OF COOL ELECTRONICS AND TECH GADGETS OUT THERE</p>
            <div className="relative w-[350px] md:w-[650px] mt-5">
              <input
                type="text"
                placeholder="search product..."
                value={searchValue}
                onChange={handleInputChange}
                className="w-full px-4 py-2 pl-10 bg-transparent border border-white rounded-full"
              />
              <Search
                className="absolute text-gray-500 transform -translate-y-1/2 left-3 top-1/2"
                onClick={handleSearch}
              />
            </div>
          </div>
          <div className="mt-24">
            <h1 className="flex items-center justify-center gap-2 mb-5 text-3xl text-white">
              <Flame className="w-10 h-10 text-[#fed700]" /> Hot Product today
            </h1>
            <div className="flex p-4 border border-gray-700 rounded-lg">
              <div className="flex flex-col">
                <p className="text-gray-400">Smart Phones & Tablets,</p>
                <h1 className="text-white">Samsung 6S 32GB LTE</h1>
                <Link to="/product/productdetails/66f09e34281213ce7345ed77">
                  <img src={goldphone} alt="" className="w-48" />
                </Link>
                <p className="text-xl text-center text-white">Rs 25000/</p>
              </div>
              <Link to="/product/productdetails/66f09d63281213ce7345ed75">
                <div className="flex flex-col">
                  <p className="text-gray-400">Smart Phones & Tablets,</p>
                  <h1 className="text-white">Redmi 6S 64GB LTE</h1>
                  <img src={redmi} alt="" className="w-48" />
                  <p className="text-xl text-center text-white">Rs 22000/</p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap px-[8vw] gap-4 pb-14 transition duration-300">
          <img src={ban1} alt="" className="hover:scale-95" />
          <Link to="/product/search/category/laptop">
            <img src={ban2} alt="" className="hover:scale-95" />
          </Link>
          <img src={ban3} alt="" className="hover:scale-95" />
          <img src={ban4} alt="" className="hover:scale-95" />
          <img src={ban5} alt="" className="hover:scale-95" />
          <img src={ban6} alt="" className="hover:scale-95" />
          <img src={ban7} alt="" className="hover:scale-95" />
        </div>
      </div>

      <div className="px-[5vw] mt-10">
        <Slider3 image1={slid1} image2={slid2} image3={slid3} />
      </div>

      <h1 className="text-3xl px-[5vw] mt-4">BestSeller on Amazon</h1>
      <div className="flex flex-wrap gap-5 px-[5vw] mt-2">
        {products &&
          bestsellers?.map((product) => (
            <div key={product._id}>
              <ProductCard product={product} />
            </div>
          ))}
      </div>

      <div className="text-white text-center px-[8vw] pb-12 mt-6 rounded-lg flex gap-3 flex-col md:flex-col lg:flex-row">
        <div className="lg:w-[75%] bg-[#f5f5f5] md:w-[100%] w-[100%]">
          <HomeBannerSlider img1={img1} img2={img2} img3={img3} />
        </div>
        <div className="lg:w-[25%] md:w-[100%] w-[100%]">
          <div className="flex justify-between items-center bg-[#f5f5f5] h-[150px]p-10">
            <img src={deal_camera} alt="" className="w-40" />
            <div className="">
              <p className="text-black">
                CATCH BIG <span className="jost">DEALS</span> ON THE CAMERA
              </p>
              <button className="text-black jost text-md">SHOP NOW</button>
            </div>
          </div>
          <div className="flex justify-between items-center bg-[#f5f5f5] mt-5 h-[120px] p-5">
            <img src={deal_laptop} alt="" className="w-32" />
            <div className="">
              <p className="text-black">
                SHOP THE <span className="jost">HOTTEST</span> PRODUCTS
              </p>
              <button className="text-black jost text-md">SHOP NOW</button>
            </div>
          </div>
          <div className="flex justify-between items-center bg-[#f5f5f5] mt-5 h-[120px] p-5">
            <img src={deal_smartphone} alt="" className="w-32" />
            <div className="">
              <p className="text-black">
                CATCH BIG <span className="jost">DEALS</span> ON THE CAMERA
              </p>
              <button className="text-black jost text-md">SHOP NOW</button>
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-3xl px-[5vw] mt-4">New Arrivals</h1>
      <div className="flex flex-wrap gap-5 px-[5vw] mt-2">
        {products &&
          newProduct?.map((product) => (
            <div key={product._id}>
              <ProductCard product={product} />
            </div>
          ))}
      </div>

      <h1 className="text-3xl px-[5vw] mt-4">Best SmartPhone on Amazon</h1>
      <div className="flex flex-wrap gap-5 px-[5vw] mt-2">
        {products &&
          mobile.map((product) => (
            <div key={product._id}>
              <ProductCard product={product} />
            </div>
          ))}
      </div>

      <h1 className="text-3xl px-[5vw] mt-4">Experience the Power of Apple</h1>
      <div className="flex flex-wrap gap-3 px-[5vw] mt-2">
        {apple &&
          apple?.map((product) => (
            <div key={product._id}>
              <ProductCard product={product} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
