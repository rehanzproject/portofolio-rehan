import { mySkill } from "./constant";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

function CardSkill() {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={2}
      breakpoints={{
        640: { slidesPerView: 2 },
        768: { slidesPerView: 4 },
      }}
      navigation
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
    >
      {mySkill.map((list) => (
        <SwiperSlide key={list.name}>
          <div className="flex flex-col text-center justify-center items-center overflow-hidden mb-20">
            <img
              src={list.icon}
              alt={list.name}
              className="w-[200px] h-[200px] object-cover" // Set both width and height
              width={200}
              height={200}
            />
            <p>{list.name}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default CardSkill;
