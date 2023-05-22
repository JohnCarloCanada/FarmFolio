import React from "react";
const Home = React.lazy(() => import("./Home"));
const Team = React.lazy(() => import("./Team"));
const Crops = React.lazy(() => import("./Crops"));

export { Home, Team, Crops };
