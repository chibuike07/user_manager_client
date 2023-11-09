"use client";

import React from "react";
import { styled } from "styled-components";
import { ICustomLabel } from "./Interface";

const CustomLabel = ({
  width,
  height,
  htmlFor,
  text,
  otherstyles,
  ...otherprops
}: ICustomLabel) => {
  return (
    <Label
      htmlFor={htmlFor}
      style={{
        width: width ?? "",
        height: height ?? "",
        ...otherstyles,
      }}
      {...otherprops}
    >
      {text}
    </Label>
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
