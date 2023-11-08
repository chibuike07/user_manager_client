"use client";

import React from "react";
import { styled } from "styled-components";
import { ICustomSelect } from "./Interface";

const CustomSelect = ({
  width,
  height,
  options,
  otherStyles,
  otherProps,
}: ICustomSelect) => {
  return (
    <Select
      style={{
        width: width ?? null,
        height: height ?? null,
        ...otherStyles,
      }}
      {...otherProps}
    >
      {options.length > 0 &&
        options.map((option, key) => <option key={key}>{option}</option>)}
    </Select>
  );
};

const Select = styled.select`
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
export default CustomSelect;
