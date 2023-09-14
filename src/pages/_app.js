import NavBar from "@/components/NavBar";
import React from "react";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <span>hello</span>
    </>
  );
}
