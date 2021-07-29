import styled, { css } from "styled-components";

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0px;
`;

interface ListItemProps {
  display?: React.CSSProperties["display"];
  padding?: React.CSSProperties["padding"];
}

export const ListItem = styled.li<ListItemProps>(
  ({ display = "flex", padding = "10px" }) => css`
    list-style: none;
    display: ${display};
    padding: ${padding};
    cursor: pointer;
    align-items: center;
  `
);
