"use client";

import React from "react";
import { styled } from "styled-components";
import { ICustomLink } from "./Interface";
import Link from "next/link";

const CustomLink = ({
  text,
  href,
  otherstyles,
  ...otherprops
}: ICustomLink) => {
  return (
    <Links
      href={href ?? ""}
      style={{
        ...otherstyles,
      }}
      {...otherprops}
    >
      {text}
    </Links>
  );
};

const Links = styled(Link)`
  cursor: pointer;
  small {
    text-transform: lowercase;
  }
`;
export default CustomLink;
