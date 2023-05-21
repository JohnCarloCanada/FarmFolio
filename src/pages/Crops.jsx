import React, { useState, useEffect } from "react";

const Crops = () => {
  const [title, setTitle] = useState("FarmFolio Crops");

  useEffect(() => {
    document.title = title;
  }, [title]);

  return <div className="text-9xl text-red-800 text-center">CROPS</div>;
};

export default Crops;
