import { CSSProperties, HTMLAttributes } from "react";

export interface ICustomLabel {
  width?: string | number;
  height?: string | number;
  text: string;
  htmlFor: string;
  otherstyles?: CSSProperties;
  otherprops?: HTMLAttributes<any>;
}
