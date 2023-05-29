import React from "react";
const Home = React.lazy(() => import("./Home"));
const Team = React.lazy(() => import("./Team"));
const Crops = React.lazy(() => import("./Crops"));
const NewlyReleased = React.lazy(() => import("./NewlyReleased"));

export { Home, Team, Crops, NewlyReleased };
