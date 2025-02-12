"use client";
import React from "react";

// Define sizes, variants, and shapes outside of the component
const sizes = {
  lg: "h-[250px] p-3 text-[24px]",
  md: "h-[178px] p-3",
  sm: "h-[154px] p-[30px] text-[16px]",
  xs: "h-[154px] p-3",
} as const;

const variants = {
  tarFillGray10023: "bg-gray-100_23",
  tarGradientGray5001Gray200: "bg-gradient",
  tarFillSecondarycolor: "bg-secondary_color",
} as const;

const shapes = {
  round: "rounded-[20px]",
} as const;

// Define the TextAreaProps type
export type TextAreaProps = Omit<
  React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>,
  "size" | "prefix" | "type" | "onChange"
> &

  Partial<{
    size?: keyof typeof sizes;
    variant?: keyof typeof variants;
    shape?: keyof typeof shapes;
    onChange?: (value: string) => void;
    className?: string;
    name?: string;
    placeholder?: string;
  }>;

// The TextArea component with forwardRef
const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    { size = "md", variant = "tarFillSecondarycolor", shape, className = "", name = "", placeholder = "", onChange, ...restProps },
    ref
  ) => {
    const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
      if (onChange) onChange(e.target.value);
    };

    return (
      <textarea
        ref={ref}
        className={`${className} ${shape && shapes[shape]} ${size && sizes[size]} ${variant && variants[variant]}`}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        {...restProps}
      />
    );
  }
);

export { TextArea };
