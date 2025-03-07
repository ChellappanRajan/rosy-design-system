const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend:{
      colors:{
        blue:{
          550:"#D3E2FD",
          650:"#EAF1FB"
        },
        green:{
          650:"#8CAFE1"
        }
      }
    }

    // extend: {
    //   boxShadow: {
    //     sm: '0 1px 0 rgba(4,4,5,0.2),0 1.5px 0 rgba(6,6,7,0.05),0 2px 0 rgba(4,4,5,0.05)',
    //     md: '0 4px 4px rgba(0,0,0,0.16)',
    //     lg: '0 8px 16px rgba(0,0,0,0.24)',
    //   },
    //   fontFamily: {
    //     sans: ['Whitney', 'Open Sans', ...defaultTheme.fontFamily.sans],
    //     title: ['Ginto', 'Open Sans', ...defaultTheme.fontFamily.sans],
    //   },
    //   colors: {
    //     brand: '#5965F2',
    //     gray: {
    //       50: '#ECEDEE',
    //       100: '#DCDDDE',
    //       200: '#B9BBBE',
    //       300: '#8E9297',
    //       400: '#72767D',
    //       500: '#5C6067',
    //       550: '#4f545c',
    //       600: '#464950',
    //       700: '#36393F',
    //       800: '#2F3136',
    //       900: '#202225',
    //     },
    //   },
    //   // borderStyle: ['hover']
    // },
  },
  variants: {
    extend: {
      // borderStyle: ['hover'], // This goes here in Tailwind 3.x
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],

};
