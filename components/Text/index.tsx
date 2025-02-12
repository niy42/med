import React from "react";

const sizes = {
  text_sm_normal: "text-[14px] font-normal",
  heading_1_regular_mobile__20px: "font-satoshi text-[20px] font-light sm:text-[17px]",
  heading_2_regular_mobile__18px: "font-satoshi text-[18px] font-light sm:text-[15px]",
  heading_3_regular_mobile__16px: "font-satoshi text-[16px] font-light sm:text-[13px]",
  heading_4_regular_mobile__14px: "font-satoshi text-[14px] font-light",
  bodytext_1_regular_mobile__12px: "font-satoshi text-[12px] font-light",
  bodytext_2_regular_mobile__10px: "font-satoshi text-[10px] font-light",
  bodytext_3_regular_mobile__8px: "font-satoshi text-[8px] font-light",
  bodytext_4_regular_mobile_6px: "font-satoshi text-[6px] font-light",
  label_2_regular__24px: "font-satoshi text-[24px] font-normal lg:text-[24px] md:text-[22px] sm:text-[20px]",
  label_3_regular__22px: "font-satoshi text-[22px] font-normal lg:text-[22px] sm:text-[18px]",
  text: "font-epilogue text-[16px] font-normal sm:text-[13px]",
  textxs: "text-[10px] font-normal",
  textxs_bold: "text-[10px] font-bold",
  textxs_extrabold: "text-[10px] font-extrabold",
  texts: "text-[12px] font-normal",
  textmd: "text-[14px] font-normal",
  textlg: "text-[15px] font-normal",
  textlg_bold: "text-[15px] font-bold",
  textlg_extrabold: "text-[15px] font-extrabold",
  textxl: "text-[16px] font-normal sm:text-[13px]",
  text2xl: "text-[18px] font-normal sm:text-[15px]",
  text7xl: "text-[34px] font-light lg:text-[34px] md:text-[32px] sm:text-[28px]",
  text10xl: "text-[42px] font-normal lg:text-[42px] md:text-[38px] sm:text-[35px]",
  text12xl: "text-[62px] font-normal lg:text-[62px] md:text-[48px]",
  text13xl: "text-[96px] font-normal lg:text-[96px] md:text-[48px]",
};

export type TextProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  as,
  size = undefined,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-gray-900_06 font-inter ${className} ${sizes[size as keyof typeof sizes]} `}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
