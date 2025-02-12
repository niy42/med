"use client";
import React from "react";

const shapes = {
  round: "rounded",
} as const;

const variants = {
  ftxtOutlineBlue600: {
    blue_600: "border-blue-600 border border-solid",
  },
  ftxtOutlineGray30005: {
    gray_300_05: "border-gray-300_05 border border-solid",
  },
  ftxtOutlineGray30005_1: {
    gray_300_05: "border-gray-300_05 border border-solid",
  },
  ftxtOutlineBlack100_1: {
    black_100: "border-black-100 border border-solid",
  },
  ftxtOutlineBlack100: {
    black_100: "border-black-100 border border-solid",
  },
} as const;

const sizes = {
  xs: "h-[48px] px-3.5 text-[16px]",
  sm: "h-[66px] px-4 text-[16px]",
  md: "h-[74px] px-3.5 text-[12px]",
} as const;

type FloatingLabelInputProps = Omit<React.ComponentPropsWithoutRef<"input">, "prefix" | "size"> &
  Partial<{
    label: string;
    floating?: "normal" | "contained";
    prefix: React.ReactNode;
    suffix: React.ReactNode;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
  }>;

const FloatingLabelInput = React.forwardRef<HTMLInputElement, FloatingLabelInputProps>(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      label = "",
      prefix,
      suffix,
      onChange,
      floating = "normal",
      shape,
      variant = "ftxtOutlineBlack100",
      size = "md",
      color = "black_100",
      ...restProps
    },
    ref,
  ) => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const labelRef = React.useRef<HTMLDivElement>(null);
    React.useImperativeHandle(ref, () => inputRef.current!);

    React.useLayoutEffect(() => {
      const input = inputRef.current;
      const label = labelRef.current;

      let timer: NodeJS.Timeout;
      let requestId: number;

      function fixOffset() {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          if (requestId) cancelAnimationFrame(requestId);
          requestId = requestAnimationFrame(() => {
            if (!input || !label) return;
            const computedStyle = getComputedStyle(input);
            label.style.left = `${input.offsetLeft + parseFloat(computedStyle.paddingInlineStart)}px`;
          });
        }, 60);
      }

      fixOffset();
      input?.addEventListener("focus", fixOffset);
      window.addEventListener("resize", fixOffset);

      return () => {
        input?.removeEventListener("focus", fixOffset);
        window.removeEventListener("resize", fixOffset);
      };
    }, []);

    return (
      <label
        floating-label={floating}
        className={`${className} flex items-center justify-center gap-2 cursor-text  ${(shape && shapes[shape]) || ""} ${variants[variant]?.[color as keyof (typeof variants)[typeof variant]] || variants[variant] || ""} ${sizes[size] || ""}`}
      >
        {!!prefix && prefix}
        <input
          floating-input=""
          ref={inputRef}
          type={type}
          name={name}
          placeholder={placeholder || label}
          onChange={onChange}
          {...restProps}
        />
        {!!(label || placeholder) && (
          <div floating-text="" ref={labelRef}>
            {label || placeholder}
          </div>
        )}
        {!!suffix && suffix}
      </label>
    );
  },
);

export { FloatingLabelInput };
