import React from "react";
const Button = React.lazy(() => import("./Button"));
const SearchComponent = React.lazy(() => import("./SearchComponent"));
const SwiperComponent = React.lazy(() => import("./SwiperComponent"));

/* import Button from "./Button";
import SearchComponent from "./SearchComponent";
import SwiperComponent from "./SwiperComponent"; */

export { Button, SearchComponent, SwiperComponent };
