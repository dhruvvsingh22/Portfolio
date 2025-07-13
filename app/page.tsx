import React from "react";
import Hello from "@/components/Hello";
import About from "@/components/About";
import Services from "@/components/Services";
import Prepare from "@/components/Prepare";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Project from "@/components/Project";

const Page = () => {
  return (
    <div>
      <Hello />
      <About />
      <Services />
      <Prepare />
    </div>
  );
};

export default Page;
