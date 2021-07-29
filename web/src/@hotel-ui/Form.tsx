import styled from "styled-components";
export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: ${(p) => p.theme.space["medium"]}px;
  ${(p) => p.theme.media.mobile};

  @media only screen and (${(p) => p.theme.media.mobile}) {
    & {
      padding: 10px;
    }
  }
`;
