import React, { useEffect, useState } from "react";
import { Pagination, Navigation } from "swiper";
import { Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SwiperComponent = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Swiper
      slidesPerView={windowWidth >= 768 ? 3 : windowWidth >= 458 ? 2 : 1}
      spaceBetween={50}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={windowWidth >= 450 ? false : true}
      modules={[Pagination, Navigation]}
      className="mySwiper w-[min(100%,1280px)] mt-10 md:mt-0"
    >
      {children}
    </Swiper>
  );
};

export default SwiperComponent;
