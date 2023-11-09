import { CSSProperties, HTMLAttributes } from "react";

export interface ICustomLists {
  width?: string | number;
  height?: string | number;
  text: string | any;
  otherStyles?: CSSProperties;
  otherProps?: HTMLAttributes<any>;
}
