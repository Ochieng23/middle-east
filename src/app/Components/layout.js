import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";
import Hero from "./Hero";
function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Essay Help - Home</title>
        <meta
          name="description"
          content="Get professional essay help from experienced tutors."
        />
      </Head>
      <Navbar />
      <Hero  />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
