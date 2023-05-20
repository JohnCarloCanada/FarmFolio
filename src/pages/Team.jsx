import React, { Suspense } from "react";
import { OurTeam } from "../components";

const Team = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OurTeam />;
    </Suspense>
  );
};

export default Team;
