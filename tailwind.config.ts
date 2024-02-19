import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-brand": "#FF7B00",
        "primary-dark": "#1B181E",
        "primary-bg": "#F0F0F0",
        "light-accent": "#83A3A9",
        "dark-accent": "#977068",
      },
    },
  },
  plugins: [],
};
export default config;
