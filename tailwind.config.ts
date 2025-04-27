import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ["Noto Sans", "DM Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        flame: '#FF6B00',
        golden: '#FFC300',
        sunset: '#FF3C38',
        cream: '#FFF8E7',
        charcoal: '#333333',
        coral: '#FF8360',
      },
    },
  },
};
