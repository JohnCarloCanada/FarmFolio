import React from "react";

const Button = React.lazy(() => import("./Button"));
const SearchComponent = React.lazy(() => import("./SearchComponent"));
const SwiperComponent = React.lazy(() => import("./SwiperComponent"));

export { Button, SearchComponent, SwiperComponent };
