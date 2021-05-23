const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');
const typography = require('@tailwindcss/typography')
const path = require('path');
module.exports = {
  mode: 'jit',
  purge: [
      './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    path.resolve(__dirname, './node_modules/litepie-datepicker/**/*.js')
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      'litepie-primary': colors.lightBlue, // color system for light mode
      'litepie-secondary': colors.coolGray, // color system for dark mode
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: {
        '50': '#f9fafb',
        '100': '#f4f5f7',
        '200': '#e5e7eb',
        '300': '#d5d6d7',
        '400': '#9e9e9e',
        '500': '#707275',
        '600': '#4c4f52',
        '700': '#24262d',
        '800': '#1a1c23',
        '900': '#121317',
      },
      'cool-gray': {
        '50': '#fbfdfe',
        '100': '#f1f5f9',
        '200': '#e2e8f0',
        '300': '#cfd8e3',
        '400': '#97a6ba',
        '500': '#64748b',
        '600': '#475569',
        '700': '#364152',
        '800': '#27303f',
        '900': '#1a202e',
      },
      red: {
        '50': '#fdf2f2',
        '100': '#fde8e8',
        '200': '#fbd5d5',
        '300': '#f8b4b4',
        '400': '#f98080',
        '500': '#f05252',
        '600': '#e02424',
        '700': '#c81e1e',
        '800': '#9b1c1c',
        '900': '#771d1d',
      },
      orange: {
        '50': '#fff8f1',
        '100': '#feecdc',
        '200': '#fcd9bd',
        '300': '#fdba8c',
        '400': '#ff8a4c',
        '500': '#ff5a1f',
        '600': '#d03801',
        '700': '#b43403',
        '800': '#8a2c0d',
        '900': '#771d1d',
      },
      yellow: {
        '50': '#fdfdea',
        '100': '#fdf6b2',
        '200': '#fce96a',
        '300': '#faca15',
        '400': '#e3a008',
        '500': '#c27803',
        '600': '#9f580a',
        '700': '#8e4b10',
        '800': '#723b13',
        '900': '#633112',
      },
      green: {
        '50': '#f3faf7',
        '100': '#def7ec',
        '200': '#bcf0da',
        '300': '#84e1bc',
        '400': '#31c48d',
        '500': '#0e9f6e',
        '600': '#057a55',
        '700': '#046c4e',
        '800': '#03543f',
        '900': '#014737',
      },
      teal: {
        '50': '#edfafa',
        '100': '#d5f5f6',
        '200': '#afecef',
        '300': '#7edce2',
        '400': '#16bdca',
        '500': '#0694a2',
        '600': '#047481',
        '700': '#036672',
        '800': '#05505c',
        '900': '#014451',
      },
      blue: {
        '50': '#ebf5ff',
        '100': '#e1effe',
        '200': '#c3ddfd',
        '300': '#a4cafe',
        '400': '#76a9fa',
        '500': '#3f83f8',
        '600': '#1c64f2',
        '700': '#1a56db',
        '800': '#1e429f',
        '900': '#233876',
      },
      pink: {
        '50': '#fdf2f8',
        '100': '#fce8f3',
        '200': '#fad1e8',
        '300': '#f8b4d9',
        '400': '#e47298',
        '500': '#e74694',
        '600': '#d61f69',
        '700': '#bf125d',
        '800': '#99154b',
        '900': '#751a3d',
      },
      indigo: {
        100: '#e6e8ff',
        300: '#b2b7ff',
        400: '#7886d7',
        500: '#6574cd',
        600: '#5661b3',
        800: '#2f365f',
        900: '#191e38',
      },
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'inherit',
            a: {
              color: 'inherit',
              opacity: 0.75,
              fontWeight: '500',
              textDecoration: 'underline',
              '&:hover': {
                opacity: 1,
                color: colors.teal[600],
              },
            },
            b: { color: 'inherit' },
            strong: { color: 'inherit' },
            em: { color: 'inherit' },
            h1: { color: 'inherit' },
            h2: { color: 'inherit' },
            h3: { color: 'inherit' },
            h4: { color: 'inherit' },
            code: { color: 'inherit' },
          },
        },
      },
      borderColor: (theme) => ({
        DEFAULT: theme('colors.gray.200', 'currentColor')
      }),
      fontFamily: {
        sans: ['Cerebri Sans', ...defaultTheme.fontFamily.sans]
      },
      boxShadow: (theme) => ({
        outline: '0 0 0 2px ' + theme('colors.indigo.500')
      }),
      fill: (theme) => theme('colors')
    }
  },
  plugins: [
    typography(),
    // ...
  ],
  variants: {
    extend: {
      fill: ['focus', 'group-hover']
    }
  }
};
