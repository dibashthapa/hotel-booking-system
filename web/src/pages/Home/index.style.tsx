import styled from "styled-components";

export const Container = styled.main`
  height: calc(100vh - 72px);
  position: relative;
  .glide,
  .glide__track,
  .glide__slides {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: all;
  }

  .glide__slide {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .glide__bullets {
    position: absolute;
    bottom: 30px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }

  .glide__bullet {
    width: 7px;
    height: 7px;
    background-color: #ffffff;
    transition: width 0.3s ease;
  }

  .glide__bullet--active {
    width: 25px;
    border-radius: 8px;
    background-color: #ffffff;
  }

  &:after {
    display: block;
    content: "";
    width: 100%;
    height: 60%;
    position: absolute;
    bottom: 0;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.5));
    pointer-events: none;
    z-index: 0;
  }
`;

export const SearchBox = styled.div`
  position: relative;
  min-height: calc(100vh - 72px);
  margin-left: auto;
  margin-right: auto;
  padding-left: 30px;
  padding-right: 30px;

  @media screen and (${(p) => p.theme.media.desktopXL}) {
    max-width: 991px;
  }
  @media screen and (${(p) => p.theme.media.tablet}) {
    max-width: ${(p) => p.theme.size.mobile};
  }
`;

export const SearchBoxContainer = styled.div`
  width: calc(100% - 60px);
  padding: 28px 30px 30px;
  border-radius: 6px;
  background-color: #fff;
  position: absolute;
  bottom: 81px;
  z-index: 1;
`;
