import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    lato: "var(--font-lato)",
    rubik: "var(--font-rubik)",
    poppins: "var(--font-poppins)",
    monte: "var(--font-montserrat)",
  },
  styles: {
    global: {
      "html, body": {
        m: "0px",
        p: "0px",
        minH: "100vh",
        fontFamily: "poppins, rubik, lato, sans-serif, arial",
        fontSize: ["12px", "18px"],
        fontWeight: [400, 400, 400, 400, 500],
        lineHeight: ["18px", "24px"],
        position: "relative",
        bgColor: "light.100",
        color: "dark.100",
      },
    },
  },
  colors: {
    primary: {
      100: "#1EC3CD",
      200: "#00AABE",
      300: "#0087A0",
    },
    light: {
      100: "#FFF",
    },
    dark: {
      100: "#000",
      200: "#333",
    },
  },

  textStyles: {},
  layerStyles: {},
  components: {
    Button: {
      variants: {},
    },
  },
});
