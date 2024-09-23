import axios from "axios";
import {
  BadgePercent,
  Facebook,
  Heart,
  Instagram,
  Share2,
  ShoppingBag,
  Twitter,
  Youtube,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  const changeImage = (src) => {
    document.getElementById("mainimg").src = src;
  };

  const searchedProductDetails = async (req, res) => {
    await axios
      .get(`http://localhost:5000/api/product/list_single_product/${id}`)
      .then((response) => {
        console.log(response.data.product);
        console.log(product);
        setProduct(response.data.product);
      });
  };

  useEffect(() => {
    searchedProductDetails();
  }, [id]);
  return (
    <div className="flex gap-3 pt-20 px-[8vw] flex-col md:flex-col lg:flex-row w-lbw h-lvh">
      <div className="flex gap-3 mt-5 md:mt-5 lg:mt-20">
        <div className="flex flex-col gap-4 mt-4 lg:mt-10">
          {product.image?.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Product image ${index + 1}`}
              className="w-28"
              onClick={() => changeImage(img)}
            />
          ))}
        </div>
        <div>
          <img src={product.image?.[0]} alt="" className="" id="mainimg" />
        </div>
      </div>
      <div className="w-full px-3 mx-auto mt-5 lg:px-20 md:mt-10 lg:mt-28">
        <p className="text-gray-500 text-md">{product.category}</p>
        <h1 className="text-4xl">{product.name}</h1>
        <p className="mt-5">{product.description}</p>

        <div className="flex items-center gap-3 mt-3">
          <h1 className="text-2xl text-red-700">{-product.discount}% OFF </h1>
          <h1 className="text-xl text-center">
            Rs. {(product.price * (100 - product.discount)) / 100}
          </h1>
        </div>
        <h1 className="text-lg text-gray-600 line-through">
          Rs. {product.price}
        </h1>
        <p className="text-sm text-gray-500">Inclusive of all taxes</p>
        <p className="text-sm text-gray-500">
          {" "}
          EMI starts at ₹4,121. No Cost EMI available EMI starts at ₹4,121. No
          Cost EMI available
        </p>
        <div className="mt-5">
          <p>Available Offers</p>
          <p className="flex items-center gap-2">
            <BadgePercent />
            Bank Offer 5% Cashback on Flipkart Axis Bank Card T&C
          </p>
          <p className="flex items-center gap-2">
            <BadgePercent /> Bank Offer 10% Cashback on Sbi Debit Card T&C
          </p>
          <p className="flex items-center gap-2">
            <BadgePercent /> Bank Offer Rs 1000 Cashback on HDFC Credit Bank
            Card T&C
          </p>
        </div>
        <div className="flex items-center gap-3 mt-8">
          <button className="p-3 border border-black rounded-lg hover:bg-black hover:text-white ">
            <Heart className="w-6" />
          </button>
          <button className="p-3 border border-black rounded-lg hover:bg-black hover:text-white">
            <ShoppingBag />
          </button>
          <button className="w-full p-3 text-white uppercase bg-black rounded-lg text-md hover:opacity-75">
            Add to cart
          </button>
        </div>
        <div className="mt-10">
          <p className="flex gap-3">
            <Share2 /> Share
          </p>
          <div className="flex gap-5 mt-3">
            <button className="p-3 transition duration-300 border border-black rounded-lg hover:bg-black hover:text-white hover:-translate-y-1">
              <Facebook className="w-6" />
            </button>
            <button className="p-3 transition duration-300 border border-black rounded-lg hover:bg-black hover:text-white hover:-translate-y-1">
              <Youtube className="w-6" />
            </button>
            <button className="p-3 transition duration-300 border border-black rounded-lg hover:bg-black hover:text-white hover:-translate-y-1">
              <Instagram className="w-6" />
            </button>
            <button className="p-3 transition duration-300 border border-black rounded-lg hover:bg-black hover:text-white hover:-translate-y-1">
              <Twitter className="w-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
