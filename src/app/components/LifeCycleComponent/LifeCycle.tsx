"use client";

import { useState } from "react";

export const UseState = () => {
  const [state, setState] = useState();

  return { state, setState };
};
