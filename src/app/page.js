"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import LocomotiveScroll from 'locomotive-scroll';
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { Benefits } from "./components/Benefits/Benefits";
import { HowItWork } from "./components/HowItWork/HowItWork";
import { OurBenefits } from "./components/OurBenefits/OurBenefits";
import { OurVehicles } from "./components/OurVehicles/OurVehicles";
import { ApplyForm } from "./components/ApplyForm/ApplyForm";
import { Fotter } from "./components/Fotter/Fotter";
import { About } from "./components/About/About";

export default function Home() {
  // const scrollRef = useRef(null);

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const scroll = new LocomotiveScroll({
  //       el: scrollRef.current,
  //       smooth: true,
  //       // Add other options as needed
  //     });

  //     return () => {
  //       if (scroll) scroll.destroy();
  //     };
  //   }
  // }, []);

  return (
    <div >
      <Navbar />
      <Hero />
      <About />
      <Benefits />
      <HowItWork />
      <OurBenefits />
      <OurVehicles />
      <ApplyForm />
      <Fotter />
    </div>
  );
}
