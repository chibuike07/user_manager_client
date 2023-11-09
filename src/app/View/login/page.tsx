"use client";

import SignInForm from "@/app/components/FormComponent/SignInForm";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";

const Login = () => {
  const pathName = usePathname();
  console.log("pathName :>> ", pathName);
  return (
    <div>
      <SignInForm identity={pathName} />
    </div>
  );
};

export default Login;
