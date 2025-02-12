import { Text, Heading, Img } from "./..";
import React from "react";

interface Props {
  pics?: string,
  alt?: string;
  className?: string;
  description?: React.ReactNode;
  description1?: React.ReactNode;
}
/* 2px 0 4px -1px rgba(0, 0, 0, 0.1), 1px 0 2px -1px rgba(0, 0, 0, 0.06) */
export default function LandingComponent8({
  description = undefined,
  description1 = undefined,
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center w-[48%] md:min-w-64 gap-4 p-5 shadow-custom-top-right-bottom rounded-[5px] 
        transform transition-transform duration-300 hover:scale-105 overflow-hidden cursor-pointer`}
    >
      <Img
        src={props.pics}
        width={30}
        height={30}
        alt={props.alt}
        className="mt-4 object-contain transform-gpu"
      />
      <div className="flex flex-col w-full items-center gap-2 self-stretch">
        <Heading
          size="heading4xl"
          as="h5"
          className="text-center !font-sfprotext text-[20px] font-bold leading-7 !text-green-900_02"
        >
          {description}
        </Heading>
        <Text
          as="p"
          className="self-stretch text-center !font-sfprotext text-[14px] font-medium leading-6 !text-gray-900_b2_02"
        >
          {description1}
        </Text>
      </div>
    </div>
  );
}