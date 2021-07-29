import styled from "styled-components";

export const FormWrapper = styled.div`
    box-shadow: rgb(0 0 0 / 16%) 0px 2px 20px;
    align-self:flex-start;
}
`;

export const GuestWrapper = styled.div`
  max-width: 236px;

  span {
    display: flex;
    justify-content: space-between;
    padding: 15px 25px;
    background: rgb(247, 247, 247);
    border-radius: 6px;
  }
`;

export const FormHeader = styled.header`
  margin-bottom: 29px;
  padding: 25px 30px 26px;
  border-bottom: ${(p) => p.theme.borders["gray"]};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DateWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  position: relative;
  div {
    margin-bottom: 0px !important;
  
  .ant-space-item {
    min-width: 236px;
    display: flex;
    align-items: center;
  }
  .ant-picker-range {
    border: transparent;
    background: rgb(247, 247, 247);
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 25px;
    & .ant-picker-active-bar {
      background: transparent;
    }
    }
  .ant-picker-focused {
    box-shadow: none;
  }
`;

export const Heading = styled.h3`
  font-size: 20px;
  margin-bottom: 0px;
  font-weight: 700;
`;

export const TextLink = styled.div`
  font-size: 15px;
  color: ${(p) => p.theme.colors["primary"]};
`;

export const CheckoutContainer = styled.div`
  padding: 0px 30px;

  div {
    margin-bottom: 30px;
  }
`;
