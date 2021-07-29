import React, { useState, MouseEventHandler } from "react";
import { BorderVariants } from "@hotel-ui/borderVariants";
import styled, {
  css,
  DefaultTheme,
  FlattenInterpolation,
  keyframes,
  ThemeProps,
} from "styled-components";
import { VariantTypes, outlined } from "@hotel-ui/colorVariants";
import { ButtonSize, IStyledButton, ButtonType, Ripple } from "./ButtonProps";
//https://codesandbox.io/s/j39p7y3kk5?file=/src/index.tsx
const ANIMATION_MS = 800;
const CIRCLE_SIZE = 50;

const ripple = keyframes`
  0% {
    opacity: 0.3;
    transform: scale(1);
  }

  50% {
    transform: scale(8);
  }

  100% {
    opacity: 0;
  }
`;
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

const ButtonRipple = styled.div<Ripple>`
  position: absolute;
  top: ${(props) => props.y}px;
  left: ${(props) => props.x}px;
  height: ${CIRCLE_SIZE}px;
  width: ${CIRCLE_SIZE}px;
  background: currentColor;
  border-radius: 50%;
  opacity: 0.3;
  animation-name: ${ripple};
  animation-duration: ${ANIMATION_MS * 2}ms;
  animation-iteration-count: 1;
  animation-timing-function: ease;
  pointer-events: none;
`;

export const Button: React.FC<StyledButtonProps> = ({
  variant = "primary",
  size,
  width,
  children,
  clickHandler,
  ...props
}) => {
  const [ripples, setRippels] = useState<Ripple[]>([]);

  const handleClick: MouseEventHandler<HTMLElement> = (evt) => {
    //https://github.com/facebook/react/issues/16201
    const node = evt.target as HTMLElement;
    const box = node.getBoundingClientRect();
    setRippels([
      ...ripples,
      {
        x: evt.clientX - box.left - CIRCLE_SIZE / 2,
        y: evt.clientY - box.top - CIRCLE_SIZE / 2,
      },
    ]);

    setTimeout(() => {
      setRippels(shift(ripples));
    }, ANIMATION_MS);

    if (clickHandler) clickHandler();
  };
  function shift(array: Ripple[]) {
    const newArray = [...array];
    newArray.shift();
    return newArray;
  }

  return (
    <StyledButton
      {...props}
      variant={variant}
      size={size}
      width={width}
      onClick={handleClick}
      type="submit"
    >
      {children}
      {ripples.map((ripple: Ripple, i: number) => (
        <ButtonRipple key={i} x={ripple.x} y={ripple.y} />
      ))}
    </StyledButton>
  );
};

export default Button;
