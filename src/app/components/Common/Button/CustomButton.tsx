"use client";

import React from "react";
import { styled } from "styled-components";
import { ICustomButton } from "./Interface";

const CustomButton = ({
  width,
  height,
  backgroundColor,
  color,
  text,
  otherStyles,
  otherProps,
}: ICustomButton) => {
  return (
    <Button
      style={{
        width: width ?? "",
        height: height ?? null,

        backgroundColor: backgroundColor
          ? backgroundColor
          : backgroundColor === "useDefault"
          ? "var(--primaryColor)"
          : "",
        color: color ? color : color === "useDefault" ? "var(--cardColor)" : "",
        ...otherStyles,
      }}
      {...otherProps}
    >
      {text}
    </Button>
  );
};

const Button = styled.button`
  width: ${(props: any) => props?.width ?? "100%"};
  height: ${(props: any) => props?.height ?? "100%"};
  border: none;
  outline: none;
  border-radius: 0.5rem;
  text-transform: capitalize;
  cursor: pointer;
  small {
    text-transform: lowercase;
  }
`;
export default CustomButton;
