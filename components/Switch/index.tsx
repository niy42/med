"use client";
import React from "react";
//@ts-ignore
import SwitchProvider from "@dhiwise/react-switch";

// Define sizes as a const object to ensure proper typing
const sizes = {
  xs: { width: 36, height: 18 },
  sm: { width: 48, height: 24 },
  md: { width: 84, height: 42 },
} as const;

// Define variants as a const object
const variants = {
  swtFillSecondarycolor: {
    onColor: "#ffffff",
    offColor: "#ffffff",
    onHandleColor: "#f1f5ff",
    offHandleColor: "#f1f5ff",
    boxShadow: "0 1px 1px 0 #00000019",
  },
} as const;

type SwitchProps = Partial<{
  value: string | boolean;
  onChange: (value: string | boolean) => void;
  variant: keyof typeof variants;
  size: keyof typeof sizes;
  checkedIcon: React.ReactNode;
  uncheckedIcon: React.ReactNode;
  className: string;
}>;

const Switch: React.FC<SwitchProps> = ({
  value = false,
  className = "",
  checkedIcon = <></>,
  uncheckedIcon = <></>,
  onChange,
  variant = "swtFillSecondarycolor",
  size = "md",
}) => {
  const [selected, setSelected] = React.useState(value);
  const handleChange = (val: string | boolean) => {
    setSelected(val);
    onChange?.(val);
  };

  return (
    <div className={className}>
      <SwitchProvider
        checked={selected}
        onChange={handleChange}
        {...variants[variant]}
        {...sizes[size]}
        checkedIcon={checkedIcon}
        uncheckedIcon={uncheckedIcon}
      />
    </div>
  );
};

export { Switch };
