import { Hero } from "../components";
import React, { Suspense } from "react";

const Home = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Hero />
    </Suspense>
  );
};

export default Home;
