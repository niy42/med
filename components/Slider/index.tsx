"use client";
import React from "react";
import AliceCarousel, { Props } from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

type SliderComponentProps = Props &
  Partial<{
    items: React.ReactElement[];  // Array of React elements
    centerMode: string | boolean;
    magnifiedIndex?: number;
    activeSlideCSS?: string;
    [x: string]: any;
  }>;

// Typing the Slider component with forwardRef
const Slider = React.forwardRef<AliceCarousel, SliderComponentProps>(
  ({ items = [], activeIndex = 0, centerMode, magnifiedIndex = 0, activeSlideCSS = "scale-75", ...props }, ref) => {

    const isSmall = (index: number) => {
      if (props?.activeIndex + magnifiedIndex >= items?.length) {
        return index !== props?.activeIndex + magnifiedIndex - items?.length;
      } else {
        return index !== props.activeIndex + magnifiedIndex;
      }
    };

    // Ensure that child is typed as React.ReactElement with a className prop
    const slideItems = centerMode
      ? items?.map((child: React.ReactElement<{ className?: string }>, index: number) => {
        if (isSmall(index)) {
          // Type assertion for className since we know it's a valid React element
          return React.cloneElement(child, {
            ...child.props, // Spread the existing props
            className: [child.props.className, activeSlideCSS].filter(Boolean).join(" "), // Combine class names
          });
        }
        return React.cloneElement(child); // Just clone without modifying
      })
      : items;

    return (
      <AliceCarousel
        items={slideItems}
        infinite
        ref={ref}
        {...props}
        touchTracking
        mouseTracking
        disableButtonsControls
      />
    );
  }
);

export { Slider };
