import { CSSProperties, HTMLAttributes } from "react";

export interface ICustomLabel {
  width?: string | number;
  height?: string | number;
  text: string;
  htmlFor: string;
  otherStyles?: CSSProperties;
  otherProps?: HTMLAttributes<any>;
}
