import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    colors: {
      primary: colors.indigo,
      gray: colors.gray,
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
