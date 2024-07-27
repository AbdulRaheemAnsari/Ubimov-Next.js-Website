"use client"
import Image from "next/image";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect } from "react";
import { Benefits } from "./components/Benefits/Benefits";
import { HowItWork } from "./components/HowItWork/HowItWork";
import { OurBenefits } from "./components/OurBenefits/OurBenefits";
import { OurVehicles } from "./components/OurVehicles/OurVehicles";
import { ApplyForm } from "./components/ApplyForm/ApplyForm";
import { Fotter } from "./components/Fotter/Fotter";
import { About } from "./components/About/About";



export default function Home() {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Benefits />
      <HowItWork />
      <OurBenefits />
      <OurVehicles />
      <ApplyForm />
      <Fotter />
    </>
  );
}
