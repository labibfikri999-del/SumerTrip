import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: '#092A37', deep: '#071D25', soft: '#617780' },
        ocean: { DEFAULT: '#0E5A71', light: '#1C7C96' },
        lagoon: '#138A72',
        sand: { 50: '#F8F5EF', 100: '#F7E6C8', 200: '#EEDCBC' },
        sunset: { DEFAULT: '#F4A261', light: '#FFD29B', deep: '#E9783F' },
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'sans-serif'],
        display: ['var(--font-clash)', 'sans-serif'],
        serif: ['var(--font-instrument)', 'serif'],
      },
      borderRadius: {
        frame: '2rem',
      },
      boxShadow: {
        glass: '0 32px 80px rgba(1, 22, 27, 0.34)',
        float: '0 18px 40px rgba(9, 42, 55, 0.16)',
      },
    },
  },
  plugins: [],
}

export default config
