import { DefaultTheme, CSSProp } from "styled-components";
import { colorVariants, colors } from "./colorVariants";
import { borderVariants, borderRadiusVariants } from "./borderVariants";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    variants: {
      primary: CSSProp;
      secondary: CSSProp;
      danger: CSSProp;
      success: CSSProp;
    };
    borders: {
      primary: string;
      secondary: string;
      danger: string;
      success: string;
      transparent: string;
      gray: string;
    };

    borderRadius: {
      small: string;
      medium: string;
      large: string;
      rounded: string;
    };
    colors: {
      primary: string;
      secondary: string;
      light: string;
      accent: string;
      offwhite: string;
      white: string;
      black: string;
      gray: string;
      green: string;
      greenlight: string;
      red: string;
      redlight: string;
      cardBg: string;
    };
    font: {
      primary: string;
      primaryBold: string;
      primaryItalic: string;
      primaryMedium: string;
      primaryLight: string;
    };
    spacings: {
      top: number;
      bottom: number;
      left: number;
      right: number;
      my: string;
      mx: string;
    };
    space: {
      none: number;
      small: number;
      medium: number;
      large: number;
      xlarge: number;
      huge: number;
    };
    border: string;
    media: {
      mobileS: string;
      mobile: string;
      tablet: string;
      minTablet: string;
      desktop: string;
      desktopL: string;
      desktopXL: string;
      desktopXXL: string;
    };
    size: {
      mobileS: string;
      mobile: string;
      tablet: string;
      minTablet: string;
      desktop: string;
      desktopL: string;
      desktopXL: string;
      desktopXXL: string;
    };
  }
}

const size = {
  mobileS: "320px",
  mobile: "480px",
  tablet: "768px",
  desktop: "1024px",
  desktopL: "1440px",
  desktopXL: "1920px",
  desktopXXL: "2560px",
};

const theme: DefaultTheme = {
  variants: {
    ...colorVariants,
  },
  borderRadius: {
    ...borderRadiusVariants,
  },
  borders: {
    ...borderVariants,
  },
  font: {
    primary: "'Lato' , sans-serif",
    primaryBold: "'Lato' , sans-serif",
    primaryItalic: "'Lato' , sans-serif",
    primaryMedium: "'Lato' , sans-serif",
    primaryLight: "'Lato' , sans-serif",
  },
  colors,
  spacings: {
    top: 40,
    bottom: 40,
    left: 25,
    right: 25,
    my: "20px",
    mx: "20px",
  },
  space: {
    none: 0,
    small: 5,
    medium: 10,
    large: 15,
    xlarge: 30,
    huge: 40,
  },
  border: `2px solid ${colors.offwhite}`,
  media: {
    mobileS: `max-width: ${size.mobileS}`,
    mobile: `max-width: ${size.mobile}`,
    tablet: `max-width: ${size.tablet}`,
    minTablet: `min-width: ${size.tablet}`,
    desktop: `max-width: ${size.desktop}`,
    desktopL: `max-width: ${size.desktopL}`,
    desktopXL: `max-width: ${size.desktopXL}`,
    desktopXXL: `max-width:${size.desktopXXL}`,
  },
  size: {
    mobileS: size.mobileS,
    mobile: size.mobile,
    tablet: size.tablet,
    minTablet: size.tablet,
    desktop: size.desktop,
    desktopL: size.desktopL,
    desktopXXL: size.desktopXXL,
    desktopXL: size.desktopXL,
  },
};

export default theme;
