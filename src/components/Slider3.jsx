import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
  import Autoplay from 'embla-carousel-autoplay'

const Slider3 = ({image1,image2,image3}) => {
  return (
    <div>
    <Carousel
     plugins={[
      Autoplay({
        delay: 4000,
      }),
    ]}
    >
      <CarouselContent>
        <CarouselItem>
         <img src={image1} alt="" />
        </CarouselItem>
        <CarouselItem>
         <img src={image2} alt="" /> 
        </CarouselItem>
        <CarouselItem>
         <img src={image3} alt="" />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </div>
  )
}

export default Slider3
