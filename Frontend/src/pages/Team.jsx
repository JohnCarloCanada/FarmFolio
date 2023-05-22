import { OurTeam } from "../components";
import useSetTitle from "../hooks/useSetTitle";

const Team = () => {
  useSetTitle("FarmFolio Team");
  return <OurTeam />;
};

export default Team;
