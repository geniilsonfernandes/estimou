import type { Config } from 'tailwindcss'
import tailwindcssAnimate from 'tailwindcss-animate'

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        upDown: 'upDown 2s ease-in-out infinite',
        fadeinup: 'fade-in-up .3s ease-out  1',
        leftRight: 'leftRight .5s ease-out 1',
      },

      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translate3d(0, -20px, 0)',
          },
          '100%': {
            opacity: '1',
            transform: 'translate3d(0, 0, 0)',
          },
        },
        upDown: {
          '0%': { transform: 'translateY(-5px)', opacity: '.5' },
          '25%': { transform: 'translateY(5px)', opacity: '1' },
          '50%': { transform: 'translateY(-5px)', opacity: '.5' },
          '75%': { transform: 'translateY(5px)', opacity: '1' },
          '100%': { transform: 'translateY(-5px)', opacity: '.5' },
        },
        leftRight: {
          '0%': { transform: 'translateX(-15px)', opacity: '.5' },
          '100%': { transform: 'translateX(0px)', opacity: '1' },
        },
      },
      fontFamily: {
        exo: ['var(--font-exo)', 'sans-serif'],
      },

      container: {
        center: true,
        padding: '2rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1280px',
        },
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        brand: {
          '50': '#EEF2FF',
          '100': '#E0E7FF',
          '200': '#C7D2FE',
          '300': '#A5B4FC',
          '400': '#818CF8',
          '500': '#4F46E5',
          '600': '#4338CA',
          '700': '#3730A3',
          '800': '#312E81',
          '900': '#1E1B4B',
          DEFAULT: '#4F46E5',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      transitionTimingFunction: {
        'custom-bezier': '.78, .18, .99, .6', // Adicionando sua função cubic-bezier
      },
    },
    plugins: [tailwindcssAnimate],
  },
} satisfies Config
