import React from "react";
import cloudy from "../assets/cloudy.png";

const WeatherForecast = ({ data }) => {
  const date = new Date();
  const today = date.getDay();
  const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  return (
    <section className="font-SegoeUI mt-10 flex flex-col items-center md:items-end justify-center md:mr-4">
      <img aria-label="Cloudy Icon" className="w-[40px] h-[40px]" src={cloudy} alt="cloudy" />
      <span className="text-[#fcb313] text-4xl font-bold mt-2">{data?.main?.temp}°C</span>
      <h2 className="mt-1 font-normal">Weather</h2>
      <p className="mt-1 font-normal">{day[today]}</p>
      <p className="mt-1 whitespace-nowrap font-normal">{data.weather[0].description}</p>
    </section>
  );
};

export default WeatherForecast;
