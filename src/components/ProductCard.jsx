import React from 'react'
import { Badge } from "@/components/ui/badge"
import { Heart, Star } from 'lucide-react'
import { Link } from 'react-router-dom'


const ProductCard = ({product}) => {
  return (
    <div className='lg:w-[230px] border border-gray-300 p-3 relative rounded-xl w-[300px] md:w-[230px]'>
      <Link to={`/product/productdetails/${product._id}`} className='hover:scale-105'>  <img src={product.image[0]} alt="" className='object-cover w-40 mx-auto h-60 ' /></Link>
      <div className='absolute text-white top-2 left-2'>
        {
            product.discount === 0 ? 
            <Badge variant="outline" className='text-white bg-green-700 text-md'>New</Badge> :
            <Badge variant="outline" className='text-white bg-red-700 text-md'>{product.discount}% OFF</Badge>
        }
      </div>
        <h1 className='text-lg text-center truncate'>{product.name}</h1>
        <Badge variant="outline" className='text-white bg-green-800 text-md'>{product.rating}<Star className='w-4 ml-1'/> </Badge>
        <div className='flex justify-between p-3'>
            <h1 className='text-lg text-center'>Rs. {product.price*(100-product.discount)/100}</h1>
            <h1 className='text-lg text-center text-red-600 line-through'>Rs. {product.price}</h1>
        </div>
        <div className='flex items-center justify-center w-full gap-2 top-20 left-2'>
          <Heart className='w-4 transition duration-300 hover:scale-105' />
          <button className='px-3 py-1 text-black transition duration-300 border border-black rounded-lg hover:scale-95'>Add To Cart</button>
        </div>
    </div>
  )
}

export default ProductCard
