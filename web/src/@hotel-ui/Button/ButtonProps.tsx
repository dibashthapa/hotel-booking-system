import { BorderVariants } from "@hotel-ui/borderVariants";
import { VariantTypes } from "@hotel-ui/colorVariants";

export type ButtonSize = "small" | "medium";
export type ButtonType = "contained" | "outlined";
export interface StyledButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: VariantTypes;
  size?: ButtonSize;
  width?: string;
  border?: BorderVariants;
  fill?: ButtonType;
  clickHandler?: () => void;
  borderRadius?: React.CSSProperties["borderRadius"];
  backgroundColor?: React.CSSProperties["backgroundColor"];
}

export interface Ripple {
  x: number;
  y: number;
}
export type IStyledButton = StyledButtonProps;
