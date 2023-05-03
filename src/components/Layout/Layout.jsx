import React from "react";
import styles from "./Layout.module.sass";
import { Navbar } from "../../modules/Navbar/Navbar";

export const Layout = ({ children }) => {

  return (
    <>
    <Navbar />
    {children}
    </>
  );
};