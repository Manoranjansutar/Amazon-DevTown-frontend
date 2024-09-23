import React, { useEffect, useState } from "react";
import banner from "./../assets/PC_header-UNREC._SX3000_QL85_.jpg";
import axios from "axios";
import ProductCard from "./ProductCard";
import { ChevronsUpDown, Plus, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useParams } from "react-router-dom";

const Search = () => {
  const [products, setProducts] = useState([]);
  const [apple, setApple] = useState([]);
  const [isOpen, setIsOpen] = React.useState(false);
  const [isOpen1, setIsOpen1] = React.useState(false);
  const [isOpen2, setIsOpen2] = React.useState(false);

const {keyword} = useParams();
console.log(keyword)



    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [brand, setBrand] = useState('');
    const [results, setResults] = useState([]);
  
    const handleSearch = async () => {
      try {
        const params = {};
        if (name) params.name = name;
        else if (category) params.category = category;
        else if (brand) params.brand = brand;
  
        const response = await axios.get('http://localhost:5000/api/product/search', { params });
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    }

    useEffect(()=>{
       handleSearch() 
    },[])

  
  const productlowtohigh = async () => {
    try {
      await axios
        .get("http://localhost:5000/api/product/price/sort/low_to_high")
        .then((response) => {
          console.log(response);
          setProducts(response.data.products);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const produchightolow = async () => {
    try {
      await axios
        .get("http://localhost:5000/api/product/price/sort/high_to_low")
        .then((response) => {
          console.log(response);
          setProducts(response.data.products);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const getProductByBrand = async (brand) => {
    console.log(brand);
    try {
      await axios
        .get(`http://localhost:5000/api/product/search/brand/${brand}`)
        .then((response) => {
          console.log(response);
          setProducts(response.data.products);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const getProductByCategory = async (category) => {
    console.log(category);
    try {
      await axios
        .get(`http://localhost:5000/api/product/search/category/${category}`)
        .then((response) => {
          console.log(response);
          setProducts(response.data.products);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const getProducts = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/api/product/list_products"
      );
      console.log(data);
      setProducts(data.products);
      console.log(products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="flex gap-10 pt-20">
      <div className="w-[20%] top-20  sticky px-[2vw]">
        <p className="mt-10 text-3xl text-center border-b border-gray-300">
          Filter
        </p>
        <div className="">
          <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="w-[350px] space-y-2 "
          >
            <div className="flex items-center justify-between px-4 space-x-4 text-black border border-gray-300 rounded-lg">
              <h4 className="text-sm font-semibold ">Sort By</h4>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm" className="p-0 w-9">
                  <ChevronsUpDown className="w-4 h-4" />
                  <span className="sr-only">Toggle</span>
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="space-y-2">
              <div
                className="px-4 py-3 font-mono text-sm border rounded-md cursor-pointer"
                onClick={productlowtohigh}
              >
                Low to High
              </div>
              <div
                className="px-4 py-3 font-mono text-sm border rounded-md cursor-pointer"
                onClick={produchightolow}
              >
                High to Low
              </div>
            </CollapsibleContent>
          </Collapsible>

          <Collapsible
            open={isOpen1}
            onOpenChange={setIsOpen1}
            className="w-[350px] space-y-2 mt-2"
          >
            <div className="flex items-center justify-between px-4 space-x-4 text-black border border-gray-300 rounded-lg">
              <h4 className="text-sm font-semibold text-black ">Brand</h4>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm" className="p-0 w-9">
                  <ChevronsUpDown className="w-4 h-4" />
                  <span className="sr-only">Toggle</span>
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="space-y-2">
              <div
                className="px-4 py-3 font-mono text-sm border rounded-md cursor-pointer hover:bg-gray-100"
                onClick={() => {
                  getProductByBrand("samsung");
                }}
              >
                Samsung
              </div>
              <div
                className="px-4 py-3 font-mono text-sm border rounded-md cursor-pointer hover:bg-gray-100"
                onClick={() => {
                  getProductByBrand("apple");
                }}
              >
                Apple
              </div>
              <div
                className="px-4 py-3 font-mono text-sm border rounded-md cursor-pointer hover:bg-gray-100"
                onClick={() => {
                  getProductByBrand("motorola");
                }}
              >
                Motorola
              </div>
              <div
                className="px-4 py-3 font-mono text-sm border rounded-md cursor-pointer hover:bg-gray-100"
                onClick={() => {
                  getProductByBrand("Sony");
                }}
              >
                Sony
              </div>
              <div
                className="px-4 py-3 font-mono text-sm border rounded-md cursor-pointer hover:bg-gray-100"
                onClick={() => {
                  getProductByBrand("Canon");
                }}
              >
                Canon
              </div>
            </CollapsibleContent>
          </Collapsible>

          <Collapsible
            open={isOpen2}
            onOpenChange={setIsOpen2}
            className="w-[350px] space-y-2 mt-2"
          >
            <div className="flex items-center justify-between w-full px-4 space-x-4 text-black border border-gray-300 rounded-lg">
              <h4 className="text-sm font-semibold text-black ">Category</h4>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm" className="p-0 w-9">
                  <ChevronsUpDown className="w-4 h-4" />
                  <span className="sr-only">Toggle</span>
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="space-y-2">
              <div
                className="px-4 py-3 font-mono text-sm border rounded-md cursor-pointer hover:bg-gray-100"
                onClick={() => {
                  getProductByCategory("mobile");
                }}
              >
                Mobile
              </div>
              <div
                className="px-4 py-3 font-mono text-sm border rounded-md cursor-pointer hover:bg-gray-100"
                onClick={() => {
                  getProductByCategory("laptop");
                }}
              >
                Laptop
              </div>
              <div
                className="px-4 py-3 font-mono text-sm border rounded-md cursor-pointer hover:bg-gray-100"
                onClick={() => {
                  getProductByCategory("fashion");
                }}
              >
                Fashion
              </div>
              <div
                className="px-4 py-3 font-mono text-sm border rounded-md cursor-pointer hover:bg-gray-100"
                onClick={() => {
                  getProductByCategory("watch");
                }}
              >
                Watch
              </div>
              <div className="px-4 py-3 font-mono text-sm border rounded-md">
                High to Low
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
      <div className="w-[80%]">
        <img src={banner} alt="" className="px-[2vw]" />
        <div className="flex flex-wrap gap-4 mx-auto mt-10 px-[2vw]">
          {products &&
            products.map((product) => (
              <div key={product._id}>
                <ProductCard product={product} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
