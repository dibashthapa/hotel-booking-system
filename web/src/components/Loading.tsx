import { VscLoading } from "react-icons/vsc";
import styled, { keyframes } from "styled-components";

const spinner = keyframes`

   to {
    transform:rotate(360deg)
   }
    
`;

export const LoadingWrapper = styled.span`
  svg {
    animation: ${spinner} 2s linear infinite;
  }
`;

export const Loading = () => {
  return (
    <LoadingWrapper>
      <VscLoading />
    </LoadingWrapper>
  );
};
