"use client";

import React, {
  HTMLAttributes,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
} from "react";
import { styled } from "styled-components";

const CustomInput = (props: InputHTMLAttributes<any>) => {
  return <Input {...props} />;
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
