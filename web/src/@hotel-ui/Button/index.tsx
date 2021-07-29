import React from "react";
import { BorderVariants } from "@hotel-ui/borderVariants";
import styled, {
  css,
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
} from "styled-components";
import { VariantTypes, outlined } from "@hotel-ui/colorVariants";
import { ButtonSize, IStyledButton, ButtonType } from "./ButtonProps";
//https://codesandbox.io/s/j39p7y3kk5?file=/src/index.tsx
interface StyledButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: VariantTypes;
  size?: ButtonSize;
  width?: string;
  border?: BorderVariants;
  fill?: ButtonType;
  borderRadius?: React.CSSProperties["borderRadius"];
  clickHandler?: () => void;
}

const button_sizes: Record<
  ButtonSize,
  FlattenInterpolation<ThemeProps<DefaultTheme>>
> = {
  small: css`
    padding: 15px 20px;
  `,
  medium: css`
    padding: 20px 15px;
  `,
};

const StyledButton = styled.button<IStyledButton>(
  ({
    width,
    variant,
    border,
    size,
    fill = "contained",
    borderRadius,
    backgroundColor,
  }) => css`
    width: ${width}; 
    height: fit-content;
    margin: 10px 0px;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;

    line-height: 1;
    transition: 0.2s;
    cursor: pointer;
    outline: none;

    ${button_sizes[size as ButtonSize]}
    border:${(p) => p.theme.borders[border as BorderVariants]};
    ${
      fill === "contained"
        ? (p) => p.theme.variants[variant as VariantTypes]
        : outlined[variant as VariantTypes]
    }
    position: relative;
    border-radius: 4px;
    border-radius:${borderRadius}
    outline: 0;
    cursor: pointer;
    overflow: hidden;
    letter-spacing: 1px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    transition: all 0.2s cubic-bezier(0.06, 0.67, 0.37, 0.99);
    background-color:${backgroundColor};

    &:hover {
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    }
  `
);

export const Button: React.FC<StyledButtonProps> = ({
  variant = "primary",
  size,
  width,
  children,
  ...props
}) => {
  return (
    <StyledButton
      {...props}
      variant={variant}
      size={size}
      width={width}
      type="submit"
    >
      {children}
    </StyledButton>
  );
};

export default Button;
