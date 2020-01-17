module.exports = {
  theme: {
    fontFamily: {
      default: ['"Open Sans"', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      // @see {@link https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js}
      colors: {
        primary: '#ABB5FF',
      },
    },
  },
  variants: {},
  plugins: [
    ({ addUtilities }) => {
      const newUtilities = {
        '.transition': {
          transition: 'all .2s ease-out',
        },
        '.after': {
          display: 'block',
          position: 'absolute',
          content: '""',
        },
        '.border-box': {
          boxSizing: 'border-box',
        },
        '.content-box': {
          boxSizing: 'content-box',
        },
        '.ellipses': {
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
        },
      };

      addUtilities(newUtilities);
    },
  ],
};
