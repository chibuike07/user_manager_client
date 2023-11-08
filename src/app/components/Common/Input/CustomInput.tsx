"use client";

import React from "react";
import { styled } from "styled-components";
import { ICustomInput } from "./Interface";

const CustomInput = ({
  width,
  height,
  otherStyles,
  otherProps,
}: ICustomInput) => {
  return (
    <Input
      style={{
        width: width ?? null,
        height: height ?? null,
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
  cursor: pointer;
  small {
    text-transform: lowercase;
  }
`;
export default CustomInput;
