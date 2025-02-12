import { Text, Heading, Img } from "./..";
import React from "react";

interface Props {
  className?: string;
  bitmap?: string;
  agencyIsABusiness?: React.ReactNode;
  stories?: React.ReactNode;
  p5nov2021?: React.ReactNode;
}

export default function LandingFrame208({
  bitmap = "img_bitmap.png",
  agencyIsABusiness = "Clinical Appointment",
  stories = "Our convenient and user-friendly platform simplifies the process of booking and managing clinical appointments....",
  p5nov2021 = "Read Now",
  ...props
}: Props) {
  return (
    <div {...props} className={`${props.className} flex flex-col md:w-full gap-[26px]`}>
      <div className="relative h-[224px] content-center self-stretch">
        <Img
          src={bitmap}
          width={370}
          height={224}
          alt="Bitmap"
          className="h-[224px] w-full flex-1 rounded-md object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[224px] flex-1 rounded-md bg-gray-900_51" />
      </div>
      <div className="flex flex-col items-start justify-center gap-[18px] self-stretch">
        <Heading size="heading6xl" as="h4" className="!font-sfprotext text-[24px] font-bold !text-gray-900_01">
          {agencyIsABusiness}
        </Heading>
        <Text
          size="text2xl"
          as="p"
          className="w-full !font-sfprotext text-[18px] font-medium leading-7 !text-gray-900_cc"
        >
          {stories}
        </Text>
        <Text as="p" className="text-[16px] font-normal !text-light_green-900 underline">
          {p5nov2021}
        </Text>
      </div>
    </div >
  );
}
