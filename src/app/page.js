import Academics from "@/components/Academics";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import More from "@/components/More";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import React from "react";

function page() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Navbar></Navbar>
      <div className="container mx-auto p-6 space-y-12">
        <Hero></Hero>
        <Academics></Academics>
        <Skills></Skills>
        <More></More>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default page;
