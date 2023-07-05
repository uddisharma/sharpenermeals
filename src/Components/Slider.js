import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export const Slider = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img
          style={{ width: "100%", height: "80vh" }}
          src="https://images01.nicepage.com/a1389d7bc73adea1e1c1fb7e/68f655c880d7557696e88a2c/pexels-photo-698857.jpeg"
          alt="not found"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          style={{ width: "100%", height: "80vh" }}
          src="https://images01.nicepage.com/a1389d7bc73adea1e1c1fb7e/206c9f61d280528c96b51230/pexels-photo-2381345.jpeg"
          alt="not found"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          style={{ width: "100%", height: "80vh" }}
          src="https://images01.nicepage.com/a1389d7bc73adea1e1c1fb7e/6cffd57525d554cab0a8d29f/pexels-photo-8257438.jpeg"
          alt="not found"
        />
      </SwiperSlide>
    </Swiper>
  );
};
