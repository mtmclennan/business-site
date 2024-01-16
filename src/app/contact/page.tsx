import React from "react";
import { Metadata } from "next";
import Contact from "./Contact";

export const metadata: Metadata = {
  title: "Contact | EdgeInBusiness: How Can we Help?",
  description: "Contact page",
};

const page = () => {
  return <Contact />;
};

export default page;
