import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography"
import defaultTheme from "tailwindcss/defaultTheme"

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "ocean-trace": ['var(--font-ocean-trace)', ...defaultTheme.fontFamily.sans],
        "safiro": ['var(--font-safiro)', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [typography()],
} satisfies Config;
