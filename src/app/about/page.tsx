import React from "react";
import About from "./About";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | EdgeInBusiness",
  description: "About EdgeInBusiness company",
};

const page = () => {
  return <About />;
};

export default page;
