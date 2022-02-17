import { globalCss } from "./stitches.config";

export const globalStyles = globalCss({
  "@font-face": [
    {
      fontFamily: "Moderat",
      src: 'url(/fonts/Moderat/Light.woff2) format("woff2")',
      fontWeight: 300,
      fontStyle: "normal",
      fontDisplay: "swap",
      unicodeRange:
        "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;",
    },
    {
      fontFamily: "Moderat",
      src: 'url(/fonts/Moderat/Regular.woff2) format("woff2")',
      fontWeight: 400,
      fontStyle: "normal",
      fontDisplay: "swap",
      unicodeRange:
        "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;",
    },
    {
      fontFamily: "Moderat",
      src: 'url(/fonts/Moderat/Medium.woff2) format("woff2")',
      fontWeight: 500,
      fontStyle: "normal",
      fontDisplay: "swap",
      unicodeRange:
        "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;",
    },
    {
      fontFamily: "Moderat",
      src: 'url(/fonts/Moderat/Bold.woff2) format("woff2")',
      fontWeight: 700,
      fontStyle: "normal",
      fontDisplay: "swap",
      unicodeRange:
        "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;",
    },
  ],

  // Use a more-intuitive box-sizing model.
  ":root": {
    boxSizing: "border-box",
    "& *, & *::before, & *::after": {
      boxSizing: "inherit",
    },
  },

  // Remove default margin
  "*": {
    margin: 0,
  },

  // Allow percentage-based heights in the application
  "html, body": {
    height: "100%",
  },

  // Improve media defaults
  "img, picture, video, canvas, svg": {
    display: "block",
    maxWidth: "100%",
  },

  // Remove built-in form typography styles
  "input, button, textarea, select": {
    font: "inherit",
  },

  // Avoid text overflows
  "p, h1, h2, h3, h4, h5, h6": {
    overflowWrap: "break-word",
    hyphens: "auto",
  },

  // Create a root stacking context
  "#root, #__next": {
    isolation: "isolate",
  },

  body: {
    fontFamily: "$body",
    fontWeight: "$light",
    lineHeight: "$body",
    "-webkit-font-smoothing": "antialiased",
  },

  "h1, h2, h3, h4, h5, h6": {
    fontFamily: "$heading",
    fontWeight: "$bold",
    lineHeight: "$heading",
  },
});
