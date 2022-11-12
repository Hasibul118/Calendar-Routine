import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="md:pt-16">{children}</main>
    </>
  );
};

export default Layout;
