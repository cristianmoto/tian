import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
       secondary: "#f5741c",
       darkBg: "#131424"
      },
      backgroundImage:{
        "gradient-cover": "linear-gradient(90.21deg, rgba(116,112,114,0.3) -5.91%,rgba(34,34,45npm,0.8)111.58%)"
      },
    },
  },
  plugins: [],
} satisfies Config;
