import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        canela: ['Canela Text', 'serif'],
      },
    },
  },
};

export default config;
