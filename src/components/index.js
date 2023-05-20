import React from "react";
const Navbar = React.lazy(() => import("./Navbar"));
const Hero = React.lazy(() => import("./Hero"));
const OurTeam = React.lazy(() => import("./OurTeam"));
const Footer = React.lazy(() => import("./Footer"));
const Layout = React.lazy(() => import("./Layout"));
const Missing = React.lazy(() => import("./Missing"));

/* import Navbar from "./Navbar";
import Hero from "./Hero";
import OurTeam from "./OurTeam";
import Footer from "./Footer";
import Layout from "./Layout";
import Missing from "./Missing"; */

export { Navbar, Hero, OurTeam, Footer, Layout, Missing };
