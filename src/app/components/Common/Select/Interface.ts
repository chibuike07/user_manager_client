import { CSSProperties, HTMLAttributes } from "react";

export interface ICustomSelect {
  width?: string | number;
  height?: string | number;
  options: any[];
  otherStyles?: CSSProperties;
  otherProps?: HTMLAttributes<any>;
}
