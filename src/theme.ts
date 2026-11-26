import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  globalCss: {
    "#root": {
      minWidth: "0",
      width: "100%",
    },
    body: {
      color: "fg",
      display: "flex",
      fontFamily: "body",
      fontWeight: "normal",
      justifyContent: "center",
      marginInline: "auto",
      maxWidth: "1280px",
      position: "relative",
      py: "2.5",
    },
    "h1, h2, h3, h4, h5, h6": {
      fontFamily: "heading",
      fontWeight: "bold",
    },
  },
  theme: {
    semanticTokens: {
      colors: {
        accent: {
          value: { _dark: "{colors.teal}", base: "{colors.purple}" },
        },
        "accent.soft": {
          value: { _dark: "{colors.purple}", base: "{colors.teal}" },
        },
        "bg.page": {
          value: { _dark: "{colors.ink}", base: "{colors.paper}" },
        },
        fg: {
          value: { _dark: "{colors.paper}", base: "{colors.ink}" },
        },
      },
    },
    tokens: {
      colors: {
        ink: { value: "#3D3C42" }, // off-black
        paper: { value: "#FEFBF6" }, // warm off-white
        purple: { value: "#4A249D" },
        teal: { value: "#009FBD" },
      },
      fonts: {
        body: { value: "'Switzer', sans-serif" },
        heading: { value: "'Switzer', sans-serif" },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
