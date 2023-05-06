import cloudy from "../assets/cloudy.png";
import { Button, SearchComponent } from "./Utils";

const Hero = () => {
  const btnLinks = [
    {
      firstGradient: "from-[#a2cf54]",
      secondGradient: "to-[#089c60]",
      text: "NEWLY RELEASED",
      textColor: "text-[#ffffff]",
    },
    { firstGradient: "from-[#e6f888]", secondGradient: "to-[#f9be26]", text: "RICE SEED CHECK", textColor: "text-[#112A46]" },
  ];

  return (
    <main className="bg-[url('/src/assets/bg-image.png')] w-full min-h-[593px] bg-cover bg-bottom bg-no-repeat px-5 md:px-8">
      <div className="w-[min(100%,1280px)] mx-auto">
        <section className="flex items-center flex-col md:flex-row justify-between">
          <section className="flex flex-col">
            <div className="md:w-[min(100%,650px)] md:ml-10">
              <h1 className="font-SegoeUI text-4xl md:text-5xl text-center md:text-left mt-4">Experience Farming perfection with FarmFolio</h1>
              <p className="font-SegoeUI mt-5 text-base md:text-xl text-center md:text-left text-[#4c4c4c]">
                A comprehensive catagalog of all your farming needs that shows general information about crops, pests, and procedures for pest control
                and also displays weather forecast.
              </p>
            </div>
          </section>
          <section className="font-SegoeUI mt-10 flex flex-col items-center md:items-end justify-center md:mr-4">
            <img aria-label="Cloudy Icon" className="w-[40px] h-[40px]" src={cloudy} alt="cloudy" />
            <span className="text-[#fcb313] text-4xl font-bold mt-2">31°C</span>
            <h2 className="mt-1 font-normal">Weather</h2>
            <p className="mt-1 font-normal">Tuesday</p>
            <p className="mt-1 whitespace-nowrap font-normal">Mostly Sunny</p>
          </section>
        </section>
        <aside className="flex w-full items-center md:justify-start justify-center">
          <div className="flex flex-col mt-5 md:mt-24 md:ml-10 w-[241px] font-SegeoUI">
            <SearchComponent />
            {btnLinks.map((btn, indx) => (
              <Button key={indx} FirstGradient={btn.firstGradient} SecondGradient={btn.secondGradient} Text={btn.text} TextColor={btn.textColor} />
            ))}
          </div>
        </aside>
      </div>
    </main>
  );
};

export default Hero;
