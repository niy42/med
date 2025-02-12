"use client";
import React from "react";

const shapes = {
  round: "rounded-[10px]",
  square: "rounded-[0px]",
} as const;

const variants = {
  fill: {
    gray_100_08: "bg-gray-100_08 text-black-1000",
    black_100: "bg-black-100 text-black-1100",
    white_A700_99: "bg-white-a700_99 text-gray-900_b2",
    secondary_color: "bg-secondary_color text-gray-900_cc",
    gray_10101: "bg-gray-10101 text-gray-900_cc",
  },
  outline: {
    white_300: "border-white-300 border border-solid",
    black_100: "border-black-100 border border-solid text-white-600",
    black_400: "border-black-400 border-[0.5px] border-solid",
    brand_gray_10: "border-brand_gray-10 border-t border-b border-solid text-gray-950",
    blue_gray_100_03: "border-blue_gray-100_03 border border-solid text-secondary_color",
    gray_300_05: "border-gray-300_05 border border-solid text-grey-02",
  },
  underline: {
    black_900_04: "border-b border-black-900_04 border-solid",
  },
  gradient: {
    gray_50_01_gray_200: "bg-gradient",
  },
} as const;

const sizes = {
  lg: "h-[48px] px-6",
  xs: "h-[18px] px-3",
  xl: "h-[48px] px-4 text-[24px]",
  "12xl": "h-[104px] px-3",
  "10xl": "h-[72px] px-3.5",
  sm: "h-[36px] px-3",
  "11xl": "h-[100px] px-3.5 text-[24px]",
  "8xl": "h-[68px] px-3.5 text-[24px]",
  "2xl": "h-[52px] px-3",
  "7xl": "h-[66px] px-[26px] text-[16px]",
  "5xl": "h-[60px] px-[30px] text-[16px]",
  "6xl": "h-[62px] px-[26px] text-[24px]",
  "9xl": "h-[70px] px-3.5 text-[16px]",
  "4xl": "h-[56px] px-[30px] text-[16px]",
  "3xl": "h-[54px] px-3.5 text-[20px]",
  md: "h-[46px] px-3.5 text-[14px]",
} as const;

type InputProps = Omit<React.ComponentPropsWithoutRef<"input">, "prefix" | "size"> &
  Partial<{
    label: string;
    prefix: React.ReactNode;
    suffix: React.ReactNode;
    shape: keyof typeof shapes;
    variant: keyof typeof variants | null;
    size: keyof typeof sizes;
    color: string;
  }>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      label = "",
      prefix,
      suffix,
      onChange,
      shape,
      variant = "fill",
      size = "md",
      color = "secondary_color",
      ...restProps
    },
    ref,
  ) => {
    return (
      <label
        className={`${className} flex items-center justify-center cursor-text  ${shape && shapes[shape]} ${variant && (variants[variant]?.[color as keyof (typeof variants)[typeof variant]] || variants[variant])} ${size && sizes[size]}`}
      >
        {!!label && label}
        {!!prefix && prefix}
        <input ref={ref} type={type} name={name} placeholder={placeholder} onChange={onChange} {...restProps} />
        {!!suffix && suffix}
      </label>
    );
  },
);

export { Input };
