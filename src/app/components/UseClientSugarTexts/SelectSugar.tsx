"use client";

import React from "react";
// import CustomSelect from "../Common/Select/CustomSelect";
import { setIdentity } from "@/Store/registerReducer";
import { useRouter } from "next/navigation";

const SelectSugar = () => {
  const router = useRouter();
  const handleChange = (e: any) => {
    console.log("got click");
    e.preventDefault();
    setIdentity(e.target.value);
    router.push("/View/register");
  };

  return (
    <select name="" id="" onChange={handleChange}>
      {["Student", "Teacher"].map((option, key) => (
        <option key={key} value={option}>
          {option}
        </option>
      ))}{" "}
    </select>
  );
};

export default SelectSugar;
