import React from "react";

const sizes = {
  b1_medium: "tracking-[0.27px] font-generalsans text-[18px] font-medium sm:text-[15px]",
  semi_bold_13px: "font-poppins text-[13px] font-medium",
  text_lg_medium: "text-[18px] font-medium sm:text-[15px]",
  heading_1_bold_mobile__20px: "font-satoshi text-[20px] font-black sm:text-[17px]",
  heading_2_bold_mobile__18px: "font-satoshi text-[18px] font-black sm:text-[15px]",
  heading_3_bold_mobile__16px: "font-satoshi text-[16px] font-black sm:text-[13px]",
  heading_4_bold_mobile__14px: "font-satoshi text-[14px] font-black",
  bodytext_1_bold_mobile__12px: "font-satoshi text-[12px] font-black",
  bodytext_2_bold_mobile__10px: "font-satoshi text-[10px] font-black",
  bodytext_3_bold_mobile__8px: "font-satoshi text-[8px] font-black",
  bodytext_4_bold_mobile_6px: "font-satoshi text-[6px] font-black",
  heading_1_semibold_mobile__20px: "font-satoshi text-[20px] font-bold sm:text-[17px]",
  heading_2_semibold_mobile__18px: "font-satoshi text-[18px] font-bold sm:text-[15px]",
  heading_3_semibold_mobile__16px: "font-satoshi text-[16px] font-bold sm:text-[13px]",
  heading_4_semibold_mobile__14px: "font-satoshi text-[14px] font-bold",
  bodytext_1_semibold_mobile__12px: "font-satoshi text-[12px] font-bold",
  bodytext_2_semibold_mobile__10px: "font-satoshi text-[10px] font-bold",
  bodytext_3_semibold_mobile__8px: "font-satoshi text-[8px] font-bold",
  bodytext_4_semibold_mobile_6px: "font-satoshi text-[6px] font-bold",
  heading_1_medium_mobile__20px: "font-satoshi text-[20px] font-medium sm:text-[17px]",
  heading_2_medium_mobile__18px: "font-satoshi text-[18px] font-medium sm:text-[15px]",
  heading_3_medium_mobile__16px: "font-satoshi text-[16px] font-medium sm:text-[13px]",
  heading_4_medium_mobile__14px: "font-satoshi text-[14px] font-medium",
  bodytext_1_medium_mobile__12px: "font-satoshi text-[12px] font-medium",
  bodytext_2_medium_mobile__10px: "font-satoshi text-[10px] font-medium",
  bodytext_3_medium_mobile__8px: "font-satoshi text-[8px] font-medium",
  bodytext_4_medium_mobile_6px: "font-satoshi text-[6px] font-medium",
  header_1_medium__48px: "font-satoshi text-[48px] font-medium lg:text-[48px] md:text-[44px] sm:text-[40px]",
  label_1_medium__26px: "font-satoshi text-[26px] font-medium lg:text-[26px] md:text-[24px] sm:text-[22px]",
  text3xl: "text-[20px] font-medium sm:text-[17px]",
  text4xl: "text-[24px] font-medium lg:text-[24px] md:text-[22px] sm:text-[20px]",
  text5xl: "text-[26px] font-medium lg:text-[26px] md:text-[24px] sm:text-[22px]",
  text6xl: "text-[32px] font-medium lg:text-[32px] md:text-[30px] sm:text-[27px]",
  text8xl: "text-[36px] font-medium lg:text-[36px] md:text-[34px] sm:text-[30px]",
  text9xl: "text-[40px] font-medium lg:text-[40px] md:text-[38px] sm:text-[34px]",
  text11xl: "text-[48px] font-medium lg:text-[48px] md:text-[44px] sm:text-[40px]",
  headingxs: "text-[10px] font-semibold",
  headings: "text-[11px] font-bold",
  headingmd: "text-[12px] font-semibold",
  headinglg: "text-[14px] font-semibold",
  headingxl: "text-[15px] font-bold",
  heading2xl: "text-[16px] font-semibold sm:text-[13px]",
  heading3xl: "text-[18px] font-bold sm:text-[15px]",
  heading4xl: "text-[20px] font-bold sm:text-[17px]",
  heading5xl: "text-[21px] font-bold lg:text-[21px] sm:text-[17px]",
  heading6xl: "text-[24px] font-semibold lg:text-[24px] md:text-[22px] sm:text-[20px]",
  heading7xl: "text-[25px] font-extrabold lg:text-[25px] md:text-[23px] sm:text-[21px]",
  heading8xl: "text-[28px] font-bold lg:text-[28px] md:text-[26px] sm:text-[23px]",
  heading9xl: "text-[32px] font-semibold lg:text-[32px] md:text-[30px] sm:text-[27px]",
  heading10xl: "text-[36px] font-bold lg:text-[36px] md:text-[34px] sm:text-[30px]",
  heading11xl: "text-[40px] font-bold lg:text-[40px] md:text-[38px] sm:text-[34px]",
  heading12xl: "text-[42px] font-semibold lg:text-[42px] md:text-[38px] sm:text-[35px]",
  heading13xl: "text-[48px] font-bold lg:text-[48px] md:text-[44px] sm:text-[40px]",
  heading14xl: "text-[56px] font-bold lg:text-[56px] md:text-[48px] sm:text-[47px]",
  heading15xl: "text-[60px] font-bold lg:text-[60px] md:text-[52px] sm:text-[51px]",
  heading16xl: "text-[64px] font-bold lg:text-[64px] md:text-[48px]",
  heading17xl: "text-[65px] font-bold lg:text-[65px] md:text-[48px]",
  heading18xl: "text-[72px] font-extrabold lg:text-[72px] md:text-[48px]",
  heading19xl: "text-[80px] font-black lg:text-[80px] md:text-[48px]",
};

export type HeadingProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",
  size = "text3xl",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component
      className={`text-gray-900_06 font-satoshi ${className} ${sizes[size] as keyof typeof sizes}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Heading };
