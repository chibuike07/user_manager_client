"use client";
import React from "react";
import CustomLink from "../Common/Link/CustomLink";
import { ILinkSugar } from "./Interface";
import { useRouter } from "next/navigation";
const LinkSugar = ({ text }: ILinkSugar) => {
  const router = useRouter();
  const handleSignIn = (e: React.MouseEvent<any, MouseEvent>) => {
    console.log("click");
    // return router.push("")
  };
  return (
    <CustomLink text={text} otherprops={{ onClick: (e) => handleSignIn(e) }} />
  );
};

export default LinkSugar;
