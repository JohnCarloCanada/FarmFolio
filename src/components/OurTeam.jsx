import { SwiperSlide } from "swiper/react";
import { carouselCards } from "../constants";
import { SwiperComponent } from "./Utils";

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
        <section className="w-[min(100%,900px)] mx-auto mt-10 md:mt-14">
          <h3 className="text-2xl md:text-3xl font-bold">Our Team</h3>
          <p className="mt-5 md:mt-6 font-SegoeUI font-medium text-base md:text-xl">
            A dedicated group of students bringing a fresh and innovative experience to the farming industry. Our team is committed to making
            agriculture accessible and engaging for all. Through interactive features and user-friendly design, we strive to create an intuitive
            platform where you can explore various crops, their characteristics, cultivation techniques to sustainable farming practices. Join us on
            this exciting journey as we step into the world of farming excellence and redefine farming knowledge for a sustainable and thriving
            agricultural landscape.
          </p>
        </section>

        <aside className="w-full">
          <SwiperComponent>
            {carouselCards.map((content, index) => {
              return (
                <SwiperSlide key={index}>
                  <CarouselCards {...content} />
                </SwiperSlide>
              );
            })}
          </SwiperComponent>
        </aside>
      </aside>
    </>
  );
};

export default OurTeam;
