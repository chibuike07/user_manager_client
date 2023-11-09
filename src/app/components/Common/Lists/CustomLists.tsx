"use client";

import React from "react";
import { styled } from "styled-components";
import { ICustomLists } from "./Interface";

const CustomLists = ({
  width,
  height,
  text,
  otherStyles,
  ...otherProps
}: ICustomLists) => {
  return (
    <List
      style={{
        width: width ?? "",
        height: height ?? "",
        ...otherStyles,
      }}
      {...otherProps}
    >
      {text}
    </List>
  );
};

const List = styled.li`
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
export default CustomLists;
