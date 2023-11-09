"use client";

import React from "react";
import { styled } from "styled-components";
import { ICustomLabel } from "./Interface";

const CustomLabel = ({
  width,
  height,
  htmlFor,
  otherStyles,
  ...otherProps
}: ICustomLabel) => {
  return (
    <Label
      htmlFor={htmlFor}
      style={{
        width: width ?? "",
        height: height ?? "",
        ...otherStyles,
      }}
      {...otherProps}
    />
  );
};

const Label = styled.label`
  width: ${(props: any) => props?.width ?? "100%"};
  height: ${(props: any) => props?.height ?? "100%"};
  text-transform: capitalize;
  small {
    text-transform: lowercase;
  }
`;
export default CustomLabel;
