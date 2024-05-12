import type { Config } from "tailwindcss";
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: "#030f22",
        secendColor: "#0892f0",
        blueColor: "#098def",
      },
      container: { center: true },
    },
  },
  plugins: [],
};
export default config;
