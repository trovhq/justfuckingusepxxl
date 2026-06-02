import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        pxxl: {
          dark: '#0a0e27',
          darker: '#050812',
          purple: '#a855f7',
          'purple-light': '#d8b4fe',
          'purple-dark': '#7e22ce',
        },
      },
      backgroundImage: {
        'pxxl-gradient': 'linear-gradient(135deg, #0a0e27 0%, #1a0d3d 50%, #0a0e27 100%)',
        'pxxl-grid': 'linear-gradient(0deg, rgba(168, 85, 247, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.03) 1px, transparent 1px)',
      },
      backgroundSize: {
        'pxxl-grid': '50px 50px',
      },
    },
  },
  plugins: [],
}
export default config
