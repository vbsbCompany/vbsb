import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper";

function GallerySlider({ images }) {
  return (
    <div className="w-full h-full">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper w-full h-full"
      >
        {images.map((image) => {
          return (
            <SwiperSlide>
              <img src={image} alt="glob-map" className="w-full object-cover" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default GallerySlider;
