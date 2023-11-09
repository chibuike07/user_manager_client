import { CSSProperties, HTMLAttributes } from "react";

export interface ICustomLink {
  text: string | any;
  href?: string;
  otherstyles?: CSSProperties;
  otherprops?: HTMLAttributes<any>;
}
