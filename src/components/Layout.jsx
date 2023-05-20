import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../components";

const Layout = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar />
      <Outlet />
      <Footer />
    </Suspense>
  );
};

export default Layout;
