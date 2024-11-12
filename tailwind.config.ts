import type { Config } from "tailwindcss";
import { fontFamily as fonts } from "tailwindcss/defaultTheme";

const config = {
  content: ["./src/**/*.{astro,mdx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nimbus: ["Nimbus Sans D OT Bold", ...fonts.sans],
        doto: "Doto",
        mono: '"Geist Mono"'
      },
      colors: {
        white: "#fffceb",
        red: "#E6002A"
      },
      screens: {
        'tall': { 'raw': '(min-width: 1024px) and (min-height: 700px)' }
      }
    },
  },
  plugins: [],
} satisfies Config;

export default config;
