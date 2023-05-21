import { OurTeam } from "../components";
import { useState, useEffect } from "react";

const Team = () => {
  const [title, setTitle] = useState("FarmFolio Team");

  useEffect(() => {
    document.title = title;
  }, [title]);

  return <OurTeam />;
};

export default Team;
