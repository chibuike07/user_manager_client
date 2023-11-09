import { CSSProperties, HTMLAttributes, FormEvent } from "react";

export interface ICustomSelect {
  width?: string | number;
  height?: string | number;
  options: any[];
  otherstyles?: CSSProperties;
  otherprops: any;
}
