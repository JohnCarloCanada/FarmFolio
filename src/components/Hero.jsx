import cloudy from "../assets/cloudy.png";
import { Button, SearchComponent } from "./Utils";

const Hero = () => {
  return (
    <main className="bg-[url('/src/assets/bg-image.png')] w-full min-h-[calc(100vh-64px)] bg-cover bg-bottom bg-no-repeat px-5 md:px-8">
      <div className="w-[min(100%,1280px)] mx-auto">
        <section className="flex items-center flex-col md:flex-row justify-between">
          <section className="flex flex-col">
            <div className="md:w-[min(100%,650px)] md:ml-10">
              <h1 className="text-4xl md:text-5xl text-center md:text-left mt-4">Experience Farming perfection with FarmFolio</h1>
              <p className="mt-5 text-base md:text-xl text-center md:text-left text-[#4c4c4c]">
                A comprehensive catagalog of all your farming needs that shows general information about crops, pests, and procedures for pest control
                and also displays weather forecast.
              </p>
            </div>
          </section>
          <section className="mt-10 flex flex-col items-center md:items-end justify-center md:mr-4">
            <img className="w-[40px] h-[40px]" src={cloudy} alt="cloudy" />
            <span className="text-[#fcb313] text-4xl font-bold mt-2">31°C</span>
            <p className="mt-1 font-semibold">Weather</p>
            <p className="mt-1 font-semibold">Tuesday</p>
            <p className="mt-1 whitespace-nowrap font-semibold">Mostly Sunny</p>
          </section>
        </section>

        <section className="flex w-full items-center md:justify-start justify-center">
          <div className="flex flex-col mt-5 md:mt-24 md:ml-10 w-[241px]">
            <SearchComponent />
            <Button FirstGradient={"from-[#a2cf54]"} SecondGradient={"to-[#089c60]"} Text={"Newly Released"} TextColor={"text-[#ffffff]"} />
            <Button FirstGradient={"from-[#e6f888]"} SecondGradient={"to-[#f9be26]"} Text={"Rice Seed Check"} TextColor={"text-[#112A46]"} />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Hero;
