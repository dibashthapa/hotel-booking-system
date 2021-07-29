import { VariantTypes, colors } from "./colorVariants";

export type BorderVariants = "transparent" | "gray" | VariantTypes;

export type BorderRadiusVariants = "small" | "medium" | "large" | "rounded";
export const borderVariants: Record<BorderVariants, string> = {
  primary: `1px solid ${colors.primary}`,
  secondary: `1px solid ${colors.secondary}`,
  danger: `1px solid ${colors.red}`,
  success: `1px solid ${colors.green}`,
  transparent: "transparent",
  gray: `1px solid ${colors.gray}`,
};

export const borderRadiusVariants: Record<BorderRadiusVariants, string> = {
  small: "5px",
  medium: "10px",
  large: "15px",
  rounded: "50%",
};
