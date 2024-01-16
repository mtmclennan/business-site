import React from "react";
import { Metadata } from "next";
import Cookies from "./Cookies";

export const metadata: Metadata = {
  title: "Cookies | EDGEINBUSINESS: How Can we Help?",
  description: "Cookies - How this site uses cookies",
};

const page = () => {
  return <Cookies />;
};

export default page;
