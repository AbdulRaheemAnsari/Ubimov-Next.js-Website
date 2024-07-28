"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
// import LocomotiveScroll from 'locomotive-scroll';
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

  useEffect(() => {

    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }

    )()

  }, []);

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
