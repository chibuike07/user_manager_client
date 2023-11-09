import { CSSProperties, HTMLAttributes } from "react";

export interface ICustomInput {
  width?: string | number;
  type: string;
  height?: string | number;
  otherStyles?: CSSProperties;
  otherProps?: HTMLAttributes<any>;
}
