import "@styles/globals.css";

const BACKGROUNDS = [
  { name: "white", value: "#ffffff" },
  { name: "light", value: "#eeeeee" },
  { name: "gray", value: "#cccccc" },
  { name: "dark", value: "#222222" },
  { name: "black", value: "#000000" }
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "light",
    values: BACKGROUNDS
  }
}
