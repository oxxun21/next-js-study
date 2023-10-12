import React from "react";
import MainNav from "./mainNav";

export default function Layout(props) {
  return (
    <>
      <MainNav />
      <main>{props.children}</main>
    </>
  );
}
