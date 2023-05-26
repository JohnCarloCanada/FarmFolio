import React from "react";
const Navbar = React.lazy(() => import("./Navbar"));
const Hero = React.lazy(() => import("./Hero"));
const OurTeam = React.lazy(() => import("./OurTeam"));
const Footer = React.lazy(() => import("./Footer"));
const Layout = React.lazy(() => import("./Layout"));
const Missing = React.lazy(() => import("./Missing"));
const Loader = React.lazy(() => import("./Loader"));
const NewlyRealase = React.lazy(() => import("./NewlyRealease"));
const ErrorHandling = React.lazy(() => import("./ErrorHandling"));

/* import Navbar from "./Navbar";
import Hero from "./Hero";
import OurTeam from "./OurTeam";
import Footer from "./Footer";
import Layout from "./Layout";
import Missing from "./Missing";
import Loader from "./Loader";
 */
export { Navbar, Hero, OurTeam, Footer, Layout, Missing, Loader, NewlyRealase, ErrorHandling };
