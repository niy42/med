import React, { useState, useEffect } from "react";

const noOp = () => { };
const defaultList: [] = [];

export type ChipViewOption<Value = string | number> = { label: string; value: Value };
export type ChipViewProps<Value = string | number> = Omit<React.ComponentPropsWithoutRef<"div">, "children"> &
  Partial<{
    options: ChipViewOption<Value>[];
    setOptions: React.Dispatch<React.SetStateAction<ChipViewOption<Value>[]>>;
    values: Value[];
    setValues: React.Dispatch<React.SetStateAction<Value[]>>;
    children?: | ((option: ChipViewOption<Value> & {
      index: number;
      label: string;
      isSelected: boolean;
      toggle: () => void;
      delete: () => void;
    },) => React.ReactNode) | React.ReactNode;
  }>;

function ChipView<Value = string | number>(props: ChipViewProps<Value>) {
  const { children, options = defaultList, values = defaultList, setValues = noOp, setOptions = noOp, ...restProps } = props;

  const deleteOption = (value: Value) => (
    event?: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>
  ) => {
    event?.preventDefault();
    setOptions((options: ChipViewOption<Value>[]) => options.filter((option) => option.value !== value));
  };

  const toggle = (value: Value) => (
    event?: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>
  ) => {
    event?.preventDefault();
    setValues((values: Value[]) => {
      const newValues = values.includes(value) ? values.filter((v) => v !== value) : [...values, value];
      return options.filter((option) => newValues.includes(option.value)).map((option) => option.value);
    });
  };

  useEffect(() => {
    setValues((values: Value[]) => {
      if (values.every((value) => options.find((option) => option.value === value))) {
        return values;
      }
      return options.filter((option) => values.includes(option.value)).map((option) => option.value);
    });
  }, [options, setValues]);

  return (
    <div {...restProps}>
      {children instanceof Function
        ? options.map((option, index) =>
          children({
            index,
            value: option.value,
            label: option.label,
            isSelected: values.includes(option.value),
            toggle: toggle(option.value),
            delete: deleteOption(option.value),
          })
        )
        : children}
    </div>
  );
}

export { ChipView };
