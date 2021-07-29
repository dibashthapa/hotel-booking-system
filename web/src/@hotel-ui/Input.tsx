import { InputHTMLAttributes } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { BorderVariants, BorderRadiusVariants } from "./borderVariants";
import { ColorTypes } from "./colorVariants";
export const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  position: relative;
`;

export const InputLeftIcon = styled.div`
  position: absolute;
  left: 15px;
  right: auto;
  top: auto;
  z-index: 1;
`;

export const InputRightIcon = styled.div`
  position: absolute;
  z-index: 1;
  top: auto;
  right: 10px;
  left: auto;
`;

type IHeight = "small" | "medium";

const input_heights: Record<IHeight, FlattenSimpleInterpolation> = {
  small: css`
    height: 45px;
  `,
  medium: css`
    height: 60px;
  `,
};

interface StyledInputProps {
  padding?: React.CSSProperties["padding"];
  margin?: React.CSSProperties["margin"];
  border?: BorderVariants;
  height?: IHeight;
  backgroundColor?: ColorTypes;
  borderRadius?: BorderRadiusVariants;
  borderHover?: ColorTypes;
}
export const StyledInput = styled.input<StyledInputProps>(
  ({
    padding,
    height,
    margin,
    border,
    borderRadius,
    backgroundColor,
    borderHover = "primary",
  }) => css`
    border: 0px;
    font-size: 15px;
    font-weight: 400;
    border-radius: 0px;
    height: 60px;
    width: 100%;
    outline: 0;
    padding: ${padding};
    margin: ${margin};
    ${input_heights[height as IHeight]};
    background: transparent;
    border: ${(p) => p.theme.borders[border as BorderVariants]};
    border-radius: ${(p) =>
      p.theme.borderRadius[borderRadius as BorderRadiusVariants]};
    background-color: ${(p) => p.theme.colors[backgroundColor as ColorTypes]};

    &:focus {
      border: 2px solid ${(p) => p.theme.colors[borderHover as ColorTypes]};
    }
  `
);

type InputAttributes = StyledInputProps & InputHTMLAttributes<HTMLInputElement>;
interface InputProps extends InputAttributes {
  LeftIcon?: React.FC;
  RightIcon?: React.FC;
}

export const Input: React.FC<InputProps> = ({
  RightIcon,
  LeftIcon,
  ...rest
}) => {
  return (
    <InputWrapper>
      {LeftIcon && (
        <InputLeftIcon>
          <LeftIcon />
        </InputLeftIcon>
      )}
      <StyledInput {...rest} />
      {RightIcon && (
        <InputRightIcon>
          <RightIcon />
        </InputRightIcon>
      )}
    </InputWrapper>
  );
};
