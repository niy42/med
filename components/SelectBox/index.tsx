"use client";
import React from "react";
import Select, { Props } from "react-select";

const shapes = {
  square: "rounded-[0px]",
  round: "rounded",
} as const;
const variants = {
  fill: {
    black_100: "bg-black-100 text-black-500",
    secondary_color: "bg-secondary_color text-gray-900_b2",
  },
  outline: {
    black_400: "border-black-400 border-[0.3px] border-solid text-gray-800_01",
    black_100: "border-black-100 border border-solid text-white-600",
  },
} as const;
const sizes = {
  md: "h-[40px] pl-2.5 pr-0.5 text-[14px]",
  "4xl": "h-[74px] pl-[22px] pr-3 text-[14px]",
  "3xl": "h-[70px] pl-[26px] pr-2.5 text-[16px]",
  lg: "h-[48px] px-3.5",
  xs: "h-[34px] px-2.5 text-[14px]",
  sm: "h-[36px] pl-2.5 pr-0.5 text-[24px]",
  "2xl": "h-[66px] px-[26px] text-[16px]",
  xl: "h-[48px] px-3.5 text-[14px]",
} as const;

// Define valid combinations of variant and color
type VariantColorMap = {
  [K in keyof typeof variants]: keyof (typeof variants)[K];
};

type selectOptionType = { value: string; label: React.ReactNode };
type SelectProps = Omit<Props, "getOptionLabel"> &
  Partial<{
    className: string;
    options: selectOptionType[];
    isSearchable: boolean;
    isMulti: boolean;
    onChange: (option: any) => void;
    value: string;
    indicator: React.ReactElement;
    getOptionLabel: (e: any) => string;
    children: React.ReactNode;
    shape: keyof typeof shapes;
    variant: keyof typeof variants | null;
    size: keyof typeof sizes;
    color: VariantColorMap[keyof VariantColorMap];
  }>;

const SelectBox = React.forwardRef<any, SelectProps>(
  (
    {
      children,
      className = "",
      options = [],
      isSearchable = false,
      isMulti = false,
      indicator,
      shape,
      variant = "outline",
      size = "xl",
      color = "black_100",
      ...restProps
    },
    ref,
  ) => {
    const [menuPortalTarget, setMenuPortalTarget] = React.useState<HTMLElement | null>(null);

    React.useEffect(() => {
      setMenuPortalTarget(document.body);
    }, []);

    return (
      <>
        <Select
          ref={ref}
          options={options}
          className={`${className} flex ${shape && shapes[shape]} ${size && sizes[size]} ${variant && variants[variant]?.[color as keyof (typeof variants)[typeof variant]]}`}
          isSearchable={isSearchable}
          isMulti={isMulti}
          components={{
            IndicatorSeparator: () => null,
            ...(indicator && { DropdownIndicator: () => indicator }),
          }}
          styles={{
            indicatorsContainer: (provided) => ({
              ...provided,
              padding: undefined,
              flexShrink: undefined,
              width: "max-content",
              "& > div": { padding: 0 },
            }),
            container: (provided) => ({
              ...provided,
              zIndex: 0,
              alignItems: "center",
            }),
            control: (provided) => ({
              ...provided,
              backgroundColor: "transparent",
              border: "0 !important",
              boxShadow: "none !important",
              minHeight: "auto",
              width: "100%",
              flexWrap: undefined,
              "&:hover": {
                border: "0 !important",
              },
            }),
            input: (provided) => ({
              ...provided,
              color: "inherit",
            }),
            option: (provided, state) => ({
              ...provided,
              display: "flex",
              minWidth: "max-content",
              width: "100%",
              backgroundColor: state.isSelected ? "#ffffff" : "transparent",
              color: state.isSelected ? "#d9d9d9" : "inherit",
              "&:hover": {
                backgroundColor: "#ffffff",
                color: "#d9d9d9",
              },
            }),
            singleValue: (provided) => ({
              ...provided,
              display: "flex",
              marginLeft: undefined,
              marginRight: undefined,
            }),
            valueContainer: (provided) => ({
              ...provided,
              padding: 0,
              display: "flex",
              flexWrap: undefined,
            }),
            placeholder: (provided) => ({
              ...provided,
              margin: 0,
            }),
            menuPortal: (base) => ({ ...base, zIndex: 999999 }),
            menu: (base) => ({ ...base, minWidth: "max-content", width: "max-content" }),
          }}
          menuPortalTarget={menuPortalTarget}
          closeMenuOnScroll={(event: any) => {
            return event.target.id === "scrollContainer";
          }}
          {...restProps}
        />
        {children}
      </>
    );
  },
);

export { SelectBox };
