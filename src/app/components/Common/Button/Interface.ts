import { CSSProperties, HtmlHTMLAttributes } from "react";

export interface ICustomButton {
  width?: string | number;
  height?: string | number;
  backgroundColor?: string | null;
  color?: string;
  text: string;
  otherStyles?: CSSProperties;
  otherProps?: HtmlHTMLAttributes<any>;
}
