import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ["Noto Sans", "DM Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
