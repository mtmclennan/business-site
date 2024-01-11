import React from "react";
import { Metadata } from "next";
import Disclaimers from "./Disclaimers";

export const metadata: Metadata = {
  title: "Disclaimer | EDGEINBUSINESS",
  description: "Cookies - How this site uses cookies",
};

const page = () => {
  return <Disclaimers />;
};

export default page;
