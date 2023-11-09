"use client";

import React from "react";
import { CircleLoader } from "react-spinners";
import { LoadingStyle } from "./loadingStyles";
const Loading = () => {
  return (
    <LoadingStyle>
      <CircleLoader size={"2rem"} />;
    </LoadingStyle>
  );
};

export default Loading;
