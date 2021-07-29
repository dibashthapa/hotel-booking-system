import {
  css,
  FlattenInterpolation,
  ThemeProps,
  DefaultTheme,
} from "styled-components";

const danger = css`
  color: ${(p) => p.theme.colors.red};
  background-color: ${(p) => p.theme.colors.redlight};
`;
const success = css`
  color: ${(p) => p.theme.colors.green};
  background-color: ${(p) => p.theme.colors.greenlight};
`;
const primary = css`
  color: ${(p) => p.theme.colors.accent};
  background-color: ${(p) => p.theme.colors.primary};
`;
const secondary = css`
  color: ${(p) => p.theme.colors.primary};
  background-color: ${(p) => p.theme.colors.accent};
`;

const dangerOutlined = css`
  color: ${(p) => p.theme.colors.red};
  border: ${(p) => p.theme.borders.danger};
  background: transparent;
`;
const successOutlined = css`
  color: ${(p) => p.theme.colors.green};
  border: ${(p) => p.theme.borders.success};
  background: transparent;
`;
const primaryOutlined = css`
  color: ${(p) => p.theme.colors.primary};
  border: ${(p) => p.theme.borders.primary};
  background: transparent;
`;
const secondaryOutlined = css`
  color: ${(p) => p.theme.colors.secondary};
  border: ${(p) => p.theme.borders.secondary};
  background: transparent;
`;

export type ColorTypes =
  | "primary"
  | "secondary"
  | "light"
  | "accent"
  | "offwhite"
  | "white"
  | "black"
  | "gray"
  | "green"
  | "greenlight"
  | "red"
  | "redlight"
  | "cardBg";
export const colors: Record<ColorTypes, string> = {
  primary: "#4F46E5",
  secondary: "#637bfe",
  light: "#8c4bff",
  accent: "#E5E9FF",
  offwhite: "#EAEEFF",
  white: "#FBFBFF",
  black: "#3D3C47",
  gray: "#d9d9d9",
  green: "#25B93E",
  greenlight: "#CEFDD7",
  red: "#FF5555",
  redlight: "#FFDADA",
  cardBg: "#F7F8FF",
};

export const outlined: Record<
  VariantTypes,
  FlattenInterpolation<ThemeProps<DefaultTheme>>
> = {
  primary: primaryOutlined,
  danger: dangerOutlined,
  success: successOutlined,
  secondary: secondaryOutlined,
};

export type VariantTypes = "primary" | "success" | "danger" | "secondary";
export const colorVariants: Record<
  VariantTypes,
  FlattenInterpolation<ThemeProps<DefaultTheme>>
> = {
  danger,
  success,
  primary,
  secondary,
};

export default colorVariants;
