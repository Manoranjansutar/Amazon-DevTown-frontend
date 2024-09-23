import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "../ui/button";
import Autoplay from 'embla-carousel-autoplay'

const HomeBannerSlider = ({ img1, img2, img3 }) => {
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
            <div className="flex justify-between items-center">
              <div className="text-black">
                <h1 className="md:text-7xl text-2xl jost">THE NEW STANDARD</h1>
                <p className="text-xl">UNDER FAVOURABLE PRICES CAMERA</p>
                <p>
                  FROM <span>Rs 30000/-</span>
                </p>
                <Button className="mt-4 px-6 py-1">BUY NOW</Button>
              </div>
              <img src={img1} alt="" />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="flex justify-between items-center">
              <div className="text-black">
                <h1 className="md:text-7xl text-2xl jost">THE NEW STANDARD</h1>
                <p className="text-xl">UNDER FAVOURABLE PRICES CAMERA</p>
                <p>
                  FROM <span>Rs 30000/-</span>
                </p>
                <Button className="mt-4 px-6 py-1">BUY NOW</Button>
              </div>
              <img src={img2} alt="" />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="flex justify-between items-center mt-20">
              <div className="text-black">
                <h1 className="md:text-7xl text-2xl jost">THE NEW STANDARD</h1>
                <p className="text-xl">UNDER FAVOURABLE PRICES CAMERA</p>
                <p>
                  FROM <span>Rs 30000/-</span>
                </p>
                <Button className="mt-4 px-6 py-1">BUY NOW</Button>
              </div>
              <img src={img3} alt="" className=""/>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default HomeBannerSlider;
