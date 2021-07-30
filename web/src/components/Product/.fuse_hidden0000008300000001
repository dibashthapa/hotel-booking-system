import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
export const ProductGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  justify-content: center;
  gap: 10px;
`;

const reveal = keyframes`
    0% {
        opacity:0;
    }
    100% {
        opacity:1;
        transform:none;
    }
`;

export const TextLink = styled(Link)`
  color: ${(p) => p.theme.colors.primary};
  display: none;
`;
export const ProductCard = styled.div`
  animation-fill-mode: both;
  animation-duration: 800ms;
  animation-delay: 640ms;
  animation-iteration-count: 1;
  animation-name: ${reveal};
  opacity: 1;
  max-width: calc(100% / 5);
  width: calc(100% / 5 - 10px);
  align-self: flex-start;

  @media (${(p) => p.theme.media.desktopL}) {
    max-width: calc(100% / 5);
    width: calc(100% / 5 - 10px);
  }
  @media (${(p) => p.theme.media.tablet}) {
    max-width: calc(100% / 3);
    width: calc(100% / 3 - 10px);
  }
  @media (${(p) => p.theme.media.mobile}) {
    max-width: calc(100% / 2);
    width: calc(100% / 2 - 10px);
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 16%) 0px 6px 12px;
  }
  border: ${(p) => p.theme.borders["gray"]};
  height: auto;
  background-color: #fff;
  position: relative;
  border-radius: 6px;
  cursor: pointer;
  .container {
    min-height: 150px;
    background-color: rgb(233, 232, 236);
  }
  .image {
    height: 240px;
    position: relative;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:hover {
    .react-multiple-carousel__arrow {
      opacity: 1;
      visibility: visible;
    }

    .react-multi-carousel-dot-list {
      bottom: 0;
    }

    a {
      display: block;
    }
  }
`;

export const ImageWrapper = styled.div`
  .react-multi-carousel-list {
    min-height: 150px;
    background-color: #e9e8ec;
  }

  .react-multi-carousel-item {
    height: 170px;
  }

  .react-multiple-carousel__arrow {
    top: 0;
    width: 22%;
    height: 100%;
    border-radius: 0;
    padding: 0;
    opacity: 0;
    visibility: hidden;
    z-index: 1;

    &::before {
      font-weight: 700;
    }
  }

  .react-multiple-carousel__arrow--left {
    left: 0;
    background: linear-gradient(
      to left,
      transparent 0%,
      rgba(0, 0, 0, 0.25) 100%
    );
    &:hover {
      background: linear-gradient(
        to left,
        transparent 0%,
        rgba(0, 0, 0, 0.25) 100%
      );
    }
  }

  .react-multiple-carousel__arrow--right {
    right: 0;
    background: linear-gradient(
      to right,
      transparent 0%,
      rgba(0, 0, 0, 0.25) 100%
    );
    &:hover {
      background: linear-gradient(
        to right,
        transparent 0%,
        rgba(0, 0, 0, 0.25) 100%
      );
    }
  }

  .react-multi-carousel-dot-list {
    position: absolute;
    bottom: -30%;
    left: 0;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(0, 0, 0, 0.25) 100%
    );
    transition: bottom 0.3s ease;
  }

  .react-multi-carousel-dot {
    align-items: center;

    button {
      width: 6px;
      height: 6px;
      border: 0;
      background-color: #e9e8e8;
      box-shadow: 0 2px 2px rgba(0, 0, 0, 0.05);
      transition: all 0.3s ease;
    }
  }

  .react-multi-carousel-dot--active {
    button {
      width: 8px;
      height: 8px;
      background-color: #ffffff;
    }
  }
`;

export const FavoriteIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 8px;
  z-index: 9;
`;

export const ContentWrapper = styled.div`
  padding: ${(p) => p.theme.space.large}px;
  border-color: ${(p) => p.theme.colors.offwhite};
  transition: border-color 0.2s ease 0s;

  .location {
    color: #909090;
    font-size: 13px;
    font-weight: 400;
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .hotel {
    color: ${(p) => p.theme.colors.black};
    font-size: 17px;
    font-weight: 700;
    margin-bottom: 2px;
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;

    a {
      color: ${(p) => p.theme.colors.black};
      font-size: 17px;
      font-weight: 700;
      margin-bottom: 2px;
    }
  }

  .meta-wrapper {
    position: relative;
    transition: all 0.3s ease-out 0s;

    .price {
      color: ${(p) => p.theme.colors.black};
      font-size: 13px;
      font-weight: 400;
      margin-top: 1px;
      white-space: nowrap;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;
