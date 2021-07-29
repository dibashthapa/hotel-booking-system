import styled from "styled-components";
import { Container } from "@hotel-ui/Container";
export const HotelContainer = styled(Container)`
  border: ${(p) => p.theme.borders["gray"]};
  padding: 0px;
`;

export const ImageGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 250px);
  gap: 10px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  & img:nth-child(1) {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 3;
  }
`;

export const MiddleContent = styled.div``;
export const DescriptionContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${(p) => p.theme.size.tablet};
`;
