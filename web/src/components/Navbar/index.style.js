import { Container } from "@hotel-ui/Container";
import styled from "styled-components";
export const Nav = styled.nav`
  @media (${(p) => p.theme.media.mobile}) {
    & {
      display: flex;
      justify-content: flex-start;
      padding: 0px;
    }

    & button {
        width:auto;
    }

    & div {
        margin:0px;
    }
  }
  background-color: #fff;
  box-shadow: rgb(0 0 0 / 4%) 0 2px 5px;
}
`;

export const NavContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
