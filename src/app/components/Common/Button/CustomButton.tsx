"use client";

import React, { ButtonHTMLAttributes, FC } from "react";
import { styled } from "styled-components";
// import { ICustomButton } from "./Interface";

const CustomButton = styled.button`
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
