"use client";

import React, { useState } from "react";
import { Img, Heading, Button } from "../components";
import Footer from "../components/Footer";
import LandingFrame1000000859 from "./LandingFrame1000000859";
import LandingFrame1000000869 from "./LandingFrame1000000869";
import LandingGroup9128 from "./LandingGroup9128";
import LandingGroup9131 from "./LandingGroup9131";
import LandingGroup9305 from "./LandingGroup9305";
import LandingGroup9484 from "./LandingGroup9484";
import Link from "next/link";

export default function LandingPage() {
  const [activeItem, setActiveItem] = useState("Home");

  const navItems = ["Home", "Services", "About", "Community", "FAQs", "Contact"];



  return (
    <div className="flex w-full flex-col space-y-2 mt-10 py-10 sm:gap-8 sm:py-4">
      <header className="mx-auto rounded-[10px] bg-secondary_color flex w-full max-w-[1200px] items-center justify-between px-4 py-0 sm:px-8">
        {/* Logo */}
        <Img
          src="medlogo.png"
          width={192}
          height={72}
          alt="Logo"
          className="h-[72px] w-auto object-contain cursor-pointer flex-shrink-0"
        />

        {/* Navigation */}
        <ul className="flex items-center space-x-6 justify-center max-sm:flex-col sm:gap-4">
          {navItems.map((item) => (
            <li key={item} className="relative">
              <Link href="#" onClick={() => setActiveItem(item)} className="lg:text-[13px]">
                <div className="flex flex-col items-center gap-1.5">
                  <Heading
                    size="heading2xl"
                    as="h6"
                    className={`!font-sfprotext cursor-pointer text-[16px] font-semibold tracking-[0.24px] ${activeItem === item ? "!text-gray-900" : "!text-gray-900_99"
                      }`}
                  >
                    {item}
                  </Heading>
                  {activeItem === item && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-4 h-[6px] w-[18px] rounded-[3px] bg-green-900_01 transition-all duration-300" />
                  )}
                </div>
              </Link>
            </li>
          ))}
        </ul>

        {/* Login and Signup */}
        <div className="flex items-center space-x-6 flex-shrink-0 sm:gap-3">
          <Heading
            size="heading2xl"
            as="h6"
            className="!font-nunito text-[16px] font-bold tracking-[0.24px] !text-light_green-900 cursor-pointer lg:text-[13px]"
          >
            Login
          </Heading>
          <Button
            color="light_green_900"
            variant="fill"
            size="2xl"
            className="min-w-[58px] rounded-full font-nunito font-semibold tracking-[0.24px] cursor-pointer sm:px-4"
          >
            Sign up
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-col gap-[60px] sm:gap-[30px]">
        <div className="flex flex-col items-center">
          <LandingGroup9305 />
          <LandingGroup9128 />
          <LandingGroup9484 />
          <LandingFrame1000000859 />
          <LandingGroup9131 />
          <div className="relative mt-[110px] h-[664px] w-[42%]">
            <LandingFrame1000000869 />
          </div>
        </div>
        <Footer className="gap-[30px]" />
      </div>
    </div>
  );
}
