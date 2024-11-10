import type { Config } from "tailwindcss";
import { fontFamily as fonts } from "tailwindcss/defaultTheme";

const config = {
  content: ["./src/**/*.{astro,mdx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nimbus: ["Nimbus Sans D OT Bold", ...fonts.sans],
        doto: "Doto",
        mono: '"Roboto Mono"'
      },
      colors: {
        white: "#fffceb",
        red: "#E6002A"
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
