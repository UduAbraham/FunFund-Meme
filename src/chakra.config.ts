import { extendTheme } from "@chakra-ui/react";

const dimensions = {
  xs: "0.5rem", // 8px
  sm: "0.75rem", //12px
  md: "0.875rem", // 14px
  base: "1rem", // 16px
  lg: "1.125rem", // 18px
  xl: "1.25rem", // 20px
  "2xl": "1.5rem", // 24px
  "3xl": "1.75rem", // 28px
  "4xl": "2rem", // 32px
  "5xl": "3rem", // 48px
  "6xl": "3.75rem", // 60px
  "7xl": "4.5rem", // 72px
  "8xl": "6rem", // 96px
  "9xl": "8rem", // 128px
  xxl: "10rem", // 160px
};

const theme = extendTheme({
  fonts: {
    heading: `"Poppins", sans-serif`,
    body: `"Poppins", sans-serif`,
  },
  colors: {
    transparent: "transparent",
    white: "#FFFFFF",
    black: "#49494C",
    info: "#03a9f4",
    success: "#19BF0B",
    warning: "#FCBC00",
    secondary: "#1C1D36",
    error: "#C20222",
    primary: "#100D06",
    accent: "#5E5227",
    darkMode4: "#9B999D",
    white2: "#B7B7B7",
  },
  fontSizes: dimensions,
  space: dimensions,
});

export default theme;
