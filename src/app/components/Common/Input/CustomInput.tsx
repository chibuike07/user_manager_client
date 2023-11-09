"use client";

import React from "react";
import { styled } from "styled-components";
import { ICustomInput } from "./Interface";

const CustomInput = ({
  width,
  height,
  type,
  otherStyles,
  ...otherProps
}: ICustomInput) => {
  return (
    <Input
      type={type}
      style={{
        width: width ?? "",
        height: height ?? "",
        ...otherStyles,
      }}
      {...otherProps}
    />
  );
};

const Input = styled.input`
  width: ${(props: any) => props?.width ?? "100%"};
  height: ${(props: any) => props?.height ?? "100%"};
  border: none;
  outline: none;
  border-radius: 0.5rem;
  text-transform: capitalize;
  small {
    text-transform: lowercase;
  }
`;
export default CustomInput;
