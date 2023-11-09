"use client";

import React from "react";
import { styled } from "styled-components";
import { ICustomSelect } from "./Interface";

const CustomSelect = ({
  width,
  height,
  options,
  otherstyles,
  ...otherprops
}: ICustomSelect) => {
  console.log("otherprops :>> ", otherprops);
  return (
    <Select
      style={{
        width: width ?? "",
        height: height ?? "",
        ...otherstyles,
      }}
      {...otherprops}
    >
      {options.length > 0 &&
        options.map((option, key) => (
          <option key={key} value={option}>
            {option}
          </option>
        ))}
    </Select>
  );
};

const Select = styled.select`
  width: ${(props: any) => props?.width ?? "100%"};
  height: ${(props: any) => props?.height ?? "100%"};
  border: none;
  outline: none;
  small {
    text-transform: lowercase;
  }
`;
export default CustomSelect;
