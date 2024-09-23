import React, { useState } from "react";
import { Button } from "../ui/button";
import upload_area from "./../../assets/upload_area.png";
import axios from "axios";
import {toast,Toaster} from "react-hot-toast"

const AddProduct = () => {
    const [image1, setImage1] = useState(false);
    const [image2, setImage2] = useState(false);
    const [image3, setImage3] = useState(false);
    const [image4, setImage4] = useState(false);   

   const [name, setName] = useState("");
   const [description, setDescription] = useState("");
   const [brand, setBrand] = useState("");
   const [category, setCategory] = useState("");
   const [price, setPrice] = useState("");
   const [discount, setDiscount] = useState("");
   const [rating, setRating] = useState("");
   const [bestseller, setBestseller] = useState("");
   const [newArrival, setNewArrival] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
   

        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('brand', brand);
        formData.append('category', category);
        formData.append('price', price)
        formData.append('discount', discount);
        formData.append('rating', rating);
        formData.append('bestseller', bestseller);
        formData.append('newArrival', newArrival);
        image1 && formData.append('image1', image1);
        image2 &&formData.append('image2', image2);
        image3 && formData.append('image3', image3);
        image4 && formData.append('image4', image4);
        
        try {
            console.log(formData)
            await axios.post("http://localhost:5000/api/product/add_product", formData)
            .then((res) => {
              if(res.data.success){ 
                toast.success("Product added successfully")
                setName("")
                setDescription("")
                setBrand("")
                setCategory("")
                setPrice("")
                setDiscount("")
                setRating("")
                setBestseller("")
                setImage1("")
                setImage2("")
                setImage3("")
                setImage4("")
                toast.success("Product added successfully")
              } else{
                toast.error("Something went wrong")
              }
            })
        } catch (error) {
            console.log(error)
        }
    }

     
  return (
    <div className="absolute w-full mt-20">
      <Toaster/>
      <h1 className="mt-5 text-3xl text-center">Add Product</h1>
      <div className="flex items-center justify-center mx-auto ">
        <form onSubmit={handleSubmit}>
          <div className="flex gap-4 mt-10">
            <label htmlFor="name" className="w-48">
              Product Name
            </label>
            <input
              type="text"
              placeholder="Enter Product name"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="py-1 border border-gray-500 rounded-md w-[350px] p-3"
            />
          </div>
          <div className="flex gap-4 mt-4">
            <label htmlFor="description" className="w-48">
              Product Description
            </label>
            <input
              type="text"
              placeholder="Enter Product description"
              id="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="py-1 border border-gray-500 rounded-md w-[350px] p-3"
            />
          </div>
          <div className="flex gap-4 mt-4">
            <label htmlFor="brand" className="w-48">
              Product Brand
            </label>
            <input
              type="text"
              placeholder="Enter Product description"
              id="brand"
              name="brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="py-1 border border-gray-500 rounded-md w-[350px] p-3"
            />
          </div>
          <div className="flex gap-4 mt-4">
            <label htmlFor="category" className="w-48">
              Product Category
            </label>
            <select
              name="category"
              value={category}
              onChange={(e)=>setCategory(e.target.value)}
              id="category"
              className="py-1 border border-gray-500 rounded-md  w-[350px] p-3"
            >
              <option value="">Choose Category</option>
              <option value="fashion">Fashion</option>
              <option value="electronics">Electronics</option>
              <option value="laptop">Laptop</option>
              <option value="mobile">Mobile</option>
              <option value="camera">Camera</option>
              <option value="watch">Watch</option>
              <option value="earphone">Earphone</option>
            </select>
          </div>
          <div className="flex gap-4 mt-4">
            <label htmlFor="price" className="w-48">
              Product Price
            </label>
            <input
              type="number"
              placeholder="Enter Product Price"
              id="price"
              name="price"
              value={price}
              onChange={(e)=>setPrice(e.target.value)}
              className="py-1 border border-gray-500 rounded-  w-[350px] p-3"
            />
          </div>
          <div className="flex gap-4 mt-4">
            <label htmlFor="discount" className="w-48">
              Product Discount
            </label>
            <input
              type="number"
              placeholder="Enter Product Discount"
              id="discount"
              name="discount"
              value={discount}
              onChange={(e)=>setDiscount(e.target.value)}
              className="py-1 border border-gray-500 rounded-md  w-[350px] p-3"
            />
          </div>
          <div className="flex gap-4 mt-4">
            <label htmlFor="rating" className="w-48">
              Product Rating
            </label>
            <input
              type="number"
              placeholder="Enter Product Rating"
              id="discount"
              name="rating"
              value={rating}
              onChange={(e)=>setRating(e.target.value)}
              className="py-1 border border-gray-500 rounded-md  w-[350px] p-3"
            />
          </div>
          <div className="flex gap-4 mt-4">
            <label htmlFor="bestseller" className="w-48">
              BestSeller
            </label>
            <select
              name="bestseller"
              id="bestseller"
              value={bestseller}
              onChange={(e)=>setBestseller(e.target.value)}
              className="py-1 border border-gray-500 rounded-md  w-[350px] p-3"
            >
              <option value="">Choose</option>
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
          </div>
          <div className="flex gap-4 mt-4">
            <label htmlFor="newarrival" className="w-48">
              New Arrival
            </label>
            <select
              name="newArrival"
              id="newarrival"
              value={newArrival}
              onChange={(e)=>setNewArrival(e.target.value)}
              className="py-1 border border-gray-500 rounded-md  w-[350px] p-3"
            >
              <option value="">Choose</option>
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
          </div>
          <div className="flex gap-4 mt-4">
            <label htmlFor="image" className="w-48">
              Product Image
            </label>
            <div className="flex gap-3">
              <label htmlFor="image1">
                <img src={!image1 ? upload_area : URL.createObjectURL(image1)} alt="" className="w-20" />
                <input type="file" hidden id="image1" onChange={(e) => setImage1(e.target.files[0])}/>
              </label>
              <label htmlFor="image2">
                <img src={!image2 ? upload_area : URL.createObjectURL(image2)} alt="" className="w-20" />
                <input type="file" hidden id="image2" onChange={(e) => setImage2(e.target.files[0])} />

              </label>
              <label htmlFor="image3">
                <img src={!image3 ? upload_area : URL.createObjectURL(image3)} alt="" className="w-20" />
                <input type="file" hidden id="image3" onChange={(e) => setImage3(e.target.files[0])}/>

              </label>
              <label htmlFor="image4">
                <img src={!image4 ? upload_area : URL.createObjectURL(image4)} alt="" className="w-20" />
                <input type="file" hidden id="image4" onChange={(e) => setImage4(e.target.files[0])}/>

              </label>
            </div>
          </div>
          <Button
            type="submit"
            className="flex px-20 py-2 mx-auto mt-10 text-lg uppercase"
          >
            Save
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
