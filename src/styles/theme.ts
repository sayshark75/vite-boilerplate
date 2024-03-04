import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        m: "0px",
        p: "0px",
        minH: "100vh",
        // fontFamily: "poppins, sans-serif, arial",
        // fontSize: ["12px", "14px"],
        // fontWeight: [400, 400, 400, 400, 500],
        // lineHeight: ["18px", "20px"],
        position: "relative",
        bgColor: "light.100",
        color: "dark.200",
      },
    },
  },
  colors: {
    light: {
      100: "#FFF",
    },
    dark: {
      100: "#000",
      200: "#333",
    },
  },

  semanticTokens: {
    colors: {
      // dark: {
      //   100: { default: "#1D1D1D", _dark: "#fff" },
      // },
      // light: {
      //   100: { default: "#fff", _dark: "#1D1D1D" },
      // },
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
