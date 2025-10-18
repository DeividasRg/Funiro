"use client";
import inspiration2 from "../../public/Rectangle 25.png";
import Image from "next/image";
import inspiration3 from "../../public/living.png";
import inspirationImg from "../../public/Rectangle 24.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function SwiperComp() {
  const images = [inspiration2, inspiration3, inspirationImg];
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      loop={true}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      slidesPerView={1.5}
      className="w-full"
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <div className="flex items-center justify-center relative h-[455px] mb-10">
            <Image src={img} alt="inspiration" fill className="object-cover " />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SwiperComp;
