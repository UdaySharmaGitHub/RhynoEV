import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import { RxArrowTopRight } from "react-icons/rx";

import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxAccessibility,
} from "react-icons/rx";

import SpaceCity1 from "../../assets/redSlider.png";
import SpaceCity5 from "../../assets/slider4.png";
import SpaceCity6 from "../../assets/blueslider.png";
import SpaceCity7 from "../../assets/slider5.png";
import SpaceCity8 from "../../assets/goldenSlider.png";
import SpaceCity9 from "../../assets/redSlider.png";
import { NavLink } from "react-router-dom";

export const ServiceData = [
  {
    backgroundImage: SpaceCity1,
  },
  {
    backgroundImage: SpaceCity5,
  },
  {
    backgroundImage: SpaceCity6,
  },
  {
    backgroundImage: SpaceCity7,
  },
  {
    backgroundImage: SpaceCity8,
  },
  {
    backgroundImage: SpaceCity9,
  },
];

export const Caroursal = () => {
  return (
    <div className="flex items-center justify-center flex-col py-4 bg-primarywhite-400 dark:bg-primarydark-300">
    <Swiper
      breakpoints={{
        0:{
          slidesPerView: 1,
          spaceBetween: 15,
        },
        470: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        700: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="max-w-[95%] lg:max-w-[90%]"
    >
      {ServiceData.map((item) => (
        <SwiperSlide key={item.title}>
          <div className="flex flex-col gap-4 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[300px] sm:h-[250px] md:w-[250px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer">
            <img src={item.backgroundImage} alt="" className="scale-125" />
            <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
            <NavLink to="/products">
            <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] dark:text-primarywhite-100 h-[35px] text-primarydark-300 group-hover:text-primaryyellow-100 group-hover:rotate-45 duration-100" />
            </NavLink>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  )
}
