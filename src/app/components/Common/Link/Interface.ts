import { CSSProperties, HTMLAttributes } from "react";

export interface ICustomLink {
  text: string | any;
  href?: string;
  otherStyles?: CSSProperties;
  otherProps?: HTMLAttributes<any>;
}
