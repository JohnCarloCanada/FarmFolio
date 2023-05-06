import { SwiperSlide } from "swiper/react";
import { carouselContent } from "../constants";
import { SwiperComponent } from "./Utils";

const CarouselCards = ({ image, name, position, quote }) => {
  return (
    <article className="flex flex-col items-center justify-center px-5 py-8">
      <div className="w-full flex flex-col md:flex-row items-center justify-start gap-y-5 md:gap-y-0 md:gap-x-16">
        <img className="w-[70px] h-[70px]" src={image} alt="profile image" />
        <div className="flex flex-col justify-start items-start">
          <h3 className="whitespace-nowrap text-[#71b575] font-SegoeUI">{name}</h3>
          <p className="whitespace-nowrap">{position}</p>
        </div>
      </div>
      <blockquote className="mt-10 before:contents-[]">
        <span className=" text-sm">" {quote} "</span>
      </blockquote>
    </article>
  );
};

const OurTeam = () => {
  return (
    <aside className="w-full text-center px-5 md:px-8 pb-36">
      <section className="w-[min(100%,800px)] mx-auto mt-10 md:mt-14">
        <h3 className="text-2xl md:text-3xl font-bold">Our Team</h3>
        <p className="mt-5 md:mt-6 font-SegoeUI font-medium text-base md:text-xl">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of
          using Lorem is that it has
        </p>
      </section>

      <aside className="w-full">
        <SwiperComponent>
          {carouselContent.map((content, index) => {
            return (
              <SwiperSlide key={index}>
                <CarouselCards {...content} />
              </SwiperSlide>
            );
          })}
        </SwiperComponent>
      </aside>
    </aside>
  );
};

export default OurTeam;
