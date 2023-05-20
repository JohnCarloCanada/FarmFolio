import { SwiperSlide } from "swiper/react";
import { carouselCards } from "../constants";
import { SwiperComponent } from "./Utils";
import { Suspense } from "react";

const CarouselCards = ({ image }) => {
  return (
    <article className="flex flex-col items-center justify-center px-5 py-8">
      <img src={image} alt="Team Carousel Cards" />
    </article>
  );
};

const OurTeam = () => {
  return (
    <>
      <aside className="w-full text-center px-5 md:px-8">
        <section className="w-[min(100%,800px)] mx-auto mt-10 md:mt-14">
          <h3 className="text-2xl md:text-3xl font-bold">Our Team</h3>
          <p className="mt-5 md:mt-6 font-SegoeUI font-medium text-base md:text-xl">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of
            using Lorem is that it has
          </p>
        </section>

        <aside className="w-full">
          <Suspense fallback={<div>Loading...</div>}>
            <SwiperComponent>
              {carouselCards.map((content, index) => {
                return (
                  <SwiperSlide key={index}>
                    <CarouselCards {...content} />
                  </SwiperSlide>
                );
              })}
            </SwiperComponent>
          </Suspense>
        </aside>
      </aside>
    </>
  );
};

export default OurTeam;
