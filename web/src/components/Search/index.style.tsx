import styled from "styled-components";

export const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: #f7f7f7;
  border-radius: 3px 0 0 3px;
  min-height: 60px;
  gap: 5px;

  @media only screen and (${(p) => p.theme.media.desktop}) {
    flex-direction: column;
  }

  @media only screen and (${(p) => p.theme.media.mobile}) {
    margin-top: 10px;
  }
`;

export const ComponentWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  position: relative;

  .ant-space-item {
    min-width: 236px;
    width: calc(100% - 14px);
    margin: 0px 0px 0px 14px;
    display: flex;
    align-items: center;
  }

  .ant-picker-range {
    border: transparent;
    background: transparent;

    & .ant-picker-active-bar {
      background: transparent;
    }
  }

  .ant-picker-input input::placeholder {
    color: black;
  }

  .ant-picker-input input[placeholder="End Date"] {
    padding-left: 10px;
  }
  .ant-picker-focused {
    box-shadow: none;
  }
  &:not(:last-child)::after {
    padding: 5px 10px;
    color: #ccc;
  }

  @media only screen and (${(p) => p.theme.media.desktopXL}) {
    &:not(:last-child)::after {
      content: "|";
    }
  }

  @media only screen and (${(p) => p.theme.media.tablet}) {
    &:not(:last-child)::after {
      content: "";
    }
  }
  span {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const PopoverWrapper = styled.div`
  width: 300px;
`;
export const PopoverContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 5px;
  }

  strong {
    font-size: 15px;
    font-weight: 400;
  }
`;

export const Quantity = styled.div`
  height: 30px;
  width: 104px;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;

  .decBtn {
    left: 0px;
  }

  .incBtn {
    right: 0px;
  }
  button {
    width: 27px;
    height: 27px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    position: absolute;
    top: 0px;
    padding: 0px;
    background-color: transparent;
    cursor: pointer;
    justify-content: center;
    border: 1px solid rgb(98, 52, 178);
  }
  p {
    width: calc(100% - 54px);
    position: absolute;
    left: 27px;
    top: 0px;
    height: 100%;
    padding: 0px;
    border: 0px;
    text-align: center;
    background-color: transparent;
  }
`;
