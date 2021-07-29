import styled, { css } from "styled-components";

export type IGaps = "none" | "small" | "medium" | "large" | "xlarge" | "huge";

export interface FlexProps {
  direction?: React.CSSProperties["flexDirection"];
  justify?: React.CSSProperties["justifyContent"];
  align?: React.CSSProperties["alignItems"];
  noWrap?: boolean;
  gap?: IGaps;
  margin?: React.CSSProperties["margin"];
  width?: React.CSSProperties["width"];
  height?: React.CSSProperties["height"];
}

export const Flex = styled.div<FlexProps>(
  ({
    gap = "none",
    direction,
    justify,
    align,
    noWrap,
    margin,
    width,
    height,
  }) => css`
    margin: ${margin};
    display: flex;
    width: ${width};
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
    height: ${height};
    flex-wrap: ${noWrap ? "no-wrap" : "wrap"};
    & > *:not(:last-child) {
      ${direction === "column"
        ? css`
            margin-bottom: ${(p) => p.theme.space[gap]}px;
          `
        : css`
            margin-right: ${(p) => p.theme.space[gap]}px;
          `}
    }
  `
);
