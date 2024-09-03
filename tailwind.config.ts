import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'gradient-custom': 'linear-gradient(to right, #4DCD8F, #F3F7FF)',
      },
    },
    fontFamily: {
      Inter18: "'Inter18' ",
      Poppins: "'Poppins' ",
    },
  },
  plugins: [],
};
export default config;
