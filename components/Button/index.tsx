import React from "react";

const shapes = {
  square: "rounded-[0px]",
  circle: "rounded-[50%]",
  round: "rounded-lg",
} as const;
const variants = {
  fill: {
    secondary_color: "bg-secondary_color text-gray-900_b2",
    black_600: "bg-black-600 text-secondary_color",
    secondary_secondary200: "bg-secondary-secondary200 text-secondary_color",
    primary_900_1: "bg-primary-900-1 text-secondary_color",
    primary_900_2: "bg-primary-900-2 text-secondary_color",
    indigo_A200_19: "bg-indigo-a200_19 text-cyan-300",
    gray_100_04: "bg-green-100",
    blue_50_03: "bg-blue-100",
    gray_50_07: "bg-purple-100",
    green_50_01: "bg-green-50_01",
    green_900_fc: "bg-green-900_fc shadow-3xl text-secondary_color",
    primary_200: "bg-primary-200 text-secondary_color",
    secondary_secondary900: "bg-secondary-secondary900 text-secondary_color",
    secondary_secondary400: "bg-secondary-secondary400 text-secondary_color",
    deep_orange_50_01: "bg-deep_orange-50_01 text-error-red_100",
    primary_100_1: "bg-primary-100-1",
    primary_600_1: "bg-primary-600-1 shadow-3xl text-secondary_color",
    primary_400: "bg-primary-400 text-white-200",
    brand_gray_20_1: "bg-brand_gray-20-1 text-brand_gray-80",
    gray_900_05: "bg-gray-900_05 text-brand_gray-10",
    brand_accent_main: "bg-brand_accent-main text-brand_gray-10",
    amber_500_01: "bg-amber-500_01 text-brand_gray-90",
    bodytext_4_bold_mobile: "bg-bodytext_4_bold_mobile text-secondary_color",
    brand_accent_80: "bg-brand_accent-80 text-secondary_color",
    black_1000: "bg-black-1000 text-secondary_color",
    teal_50: "bg-teal-50 text-success-green_100",
    brand_gray_20_0: "bg-brand_gray-20-0 text-brand_gray-80",
    gray_100_08: "bg-gray-100_08 shadow-4xl",
    secondary_secondary800: "bg-secondary-secondary800 text-secondary_color",
    white_A700_d8: "bg-white-a700_d8",
    gray_300_33: "bg-gray-300_33 text-brand_gray-90",
    gray_50_06: "bg-red-100",
    green_50: "bg-green-50",
    success_green_10: "bg-success-green_10 text-success-green_100",
    primary_100_0: "bg-primary-100-0",
    light_green_100: "bg-light_green-100 text-green-900_03",
    green_50_02: "bg-green-50_02 text-primary-600-0",
    primary_600_0: "bg-primary-600-0 text-secondary_color",
    warning_yellow_10: "bg-warning-yellow_10 text-deep_orange-900",
    brand_pry_main: "bg-brand_pry-main text-black-1100",
    primary_800: "bg-primary-800 text-secondary_color",
    secondary_secondary100: "bg-secondary-secondary100 text-secondary-secondary600",
    primary_700: "bg-primary-700 text-secondary_color",
    error_red_10: "bg-error-red_10 text-error-red_100",
    green_900: "bg-green-900 text-secondary_color",
    deep_orange_50: "bg-deep_orange-50 text-red-a700",
    cyan_300: "bg-cyan-300 text-secondary_color",
    blue_gray_50_01: "bg-blue_gray-50_01 text-black-900_04",
    light_green_900: "bg-light_green-900 text-secondary_color",
    primary_900_0: "bg-primary-900-0 text-secondary_color",
  },
  outline: {
    gray_400: "border-gray-400 border-[0.5px] border-dashed",
    secondary_secondary700: "border-secondary-secondary700 border border-solid text-secondary-secondary700",
    black_100: "border-black-100 border-t border-l border-r border-solid text-black-1100",
    primary_400: "border-primary-400 border border-solid text-black-400",
    primary_200: "border-primary-200 border border-solid text-black-200",
    secondary_secondary900: "border-secondary-secondary900 border border-solid text-black-1000",
    secondary_secondary400: "border-secondary-secondary400 border border-solid text-black-400",
    secondary_secondary800: "border-secondary-secondary800 border border-solid text-gray-90901",
    secondary_secondary200: "border-secondary-secondary200 border border-solid text-black-200",
    light_green_900: "border-light_green-900 border border-solid text-light_green-900",
    light_mode_gray_5: "border-light_mode-gray-5 border-[0.25px] border-solid text-bodytext_4_bold_mobile",
    gray_900_cc: "border-gray-900_cc border border-solid text-gray-900_cc",
    gray_800_e5: "border-gray-800_e5 border border-solid text-gray-800_e5",
    primary_700: "border-primary-700 border border-solid text-primary-700",
    primary_800: "border-primary-800 border border-solid text-primary-900-0",
    primary_600_0: "border-primary-600-0 border border-dashed",
    primary_900_0: "border-primary-900-0 border border-solid text-black-900_02",
    black_900_04: "border-black-900_04 border border-solid text-black-1000",
    gray_300_02: "border-gray-300_02 border-l border-b border-r border-solid text-brand_gray-90",
  },
} as const;
const sizes = {
  "19xl": "h-[66px] px-2.5",
  "14xl": "h-[58px] px-4",
  "13xl": "h-[56px] px-[34px] text-[20px]",
  "12xl": "h-[56px] px-[34px] text-[24px]",
  lg: "h-[32px] px-4 text-[20px]",
  "22xl": "h-[100px] px-[30px]",
  "9xl": "h-[52px] px-[34px] text-[24px]",
  sm: "h-[24px] px-1",
  md: "h-[28px] px-3 text-[14px]",
  "8xl": "h-[52px] px-[34px] text-[20px]",
  "21xl": "h-[88px] px-2.5 text-[24px]",
  "5xl": "h-[48px] px-3",
  "10xl": "h-[52px] px-1.5",
  "15xl": "h-[60px] px-[34px] text-[24px]",
  xs: "h-[22px] px-1.5 text-[12px]",
  "16xl": "h-[60px] px-[34px] text-[20px]",
  "18xl": "h-[66px] px-[34px] text-[18px]",
  "11xl": "h-[54px] px-[34px] text-[16px]",
  xl: "h-[34px]",
  "17xl": "h-[62px] px-[34px] text-[16px]",
  "20xl": "h-[72px] px-[34px] text-[16px]",
  "3xl": "h-[42px] px-2.5",
  "4xl": "h-[44px] px-2.5 text-[16px]",
  "2xl": "h-[38px] px-2.5 text-[12px]",
  "7xl": "h-[48px] px-[34px] text-[20px]",
  "6xl": "h-[48px] px-[30px] text-[16px]",
} as const;

type VariantKeys = keyof typeof variants;
type ColorKeys<V extends VariantKeys> = keyof typeof variants[V];
type ButtonProps = Omit<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "onClick"
> &
  Partial<{
    className: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
    shape: keyof typeof shapes;
    variant: VariantKeys;
    size: keyof typeof sizes;
    color: ColorKeys<keyof typeof variants> | string;
  }>;
const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = undefined,
  variant = undefined,
  size = undefined,
  color,
  ...restProps
}) => {
  return (
    <button
      className={`
        ${className} 
        flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap 
        ${shape && shapes[shape]} 
        ${size && sizes[size]} 
        ${variant && variants[variant]?.[color as keyof (typeof variants)[typeof variant]]}
      `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
