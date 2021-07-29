import styled, { css } from "styled-components";

export type ISize = "none" | "small" | "medium" | "large" | "xlarge" | "huge";

interface TextProps {
  display?: React.CSSProperties["display"];
  justifyContent?: React.CSSProperties["justifyContent"];
  alignItems?: React.CSSProperties["alignItems"];
  direction?: React.CSSProperties["flexDirection"];
  fontSize?: React.CSSProperties["fontSize"];
  fontWeight?: React.CSSProperties["fontWeight"];
  color?: React.CSSProperties["color"];
  align?: React.CSSProperties["textAlign"];
  marginX?: React.CSSProperties["marginLeft"] | ISize;
  margin?: React.CSSProperties["margin"] | ISize;
  marginY?: React.CSSProperties["marginTop"] | ISize;
  cursor?: React.CSSProperties["cursor"];
  marginBottom?: React.CSSProperties["marginBottom"];
}

export const Text = styled.p<TextProps>(
  ({
    display = "block",
    justifyContent,
    alignItems,
    direction,
    fontSize,
    fontWeight,
    color,
    align,
    marginX,
    margin = "0px",
    marginY,
    cursor,
    marginBottom,
  }) => css`
    display: ${display};
    font-size: ${fontSize};
    font-weight: ${fontWeight};
    color: ${color};
    text-align: ${align};
    margin: ${margin};
    margin-bottom: ${marginBottom};
    margin-left: ${marginX};
    margin-right: ${marginX};
    margin-top: ${marginY};
    cursor: ${cursor};
    margin-bottom: ${marginY};
    ${display === "flex" &&
    `
        flex-direction:${direction};
        justifyContent:${justifyContent};
        align-items:${alignItems};
        `}
  `
);
