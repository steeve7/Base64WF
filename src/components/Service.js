"use client"
import react from 'react'
import Image from 'next/image'
import bgimage from "../components/Assets/IMG_1606.jpg";
// import bg1image from "../components/Assets/bgimage.jpeg";
import herobanner from "../components/Assets/woman (1).jpg";
import herobanner2 from "../components/Assets/woman (2).jpg";
import herobanner3 from "../components/Assets/woman (3).jpg";
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import {Navigation, Autoplay, Pagination} from 'swiper/modules'

export default function Service(){
    const images = [
      {
        image: bgimage,
      },
      {
        image: herobanner3,
      },
      {
        image: herobanner,
      },
      {
        image: herobanner2,
      },
    ];
    return (
      <div className="w-full" id="home">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="h-full w-full md:top-0 top-2"
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <div>
                <Image
                  src={img.image}
                  className="w-full"
                  alt="image"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
}