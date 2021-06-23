import { createMuiTheme } from '@material-ui/core/styles';
//font-family: 'Exo', sans-serif;
//font-family: 'Poppins', sans-serif;
// add font Guthem Bloots,
const guthen = {
  fontFamily: 'Guthen Bloots',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('Guthen Bloots Regular'), 
    local('Guthen-Bloots-Regular'),
    url('./fonts/GuthenBloots.woff') format('woff'),
    url('./fonts/GuthenBloots.ttf') format('truetype'),
    url('./fonts/GuthenBloots.woff2') format('woff2')
  `,
 };

// Create a theme instance.
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#345278',
            text: '#B3C53A',
            icons: '#E8A13A'
        },
        secondary: {
            main: '#E8A13A',
        },
        green: {
            default: '#B3C53A',
        },
        blueMarine: '#83CBC9',
        yellow: '#F5DB50',
        orange: '#E8A13A'
    },
    typography: {
      fontFamily: [
                    'Poppins',
                    'Exo',
                    // '"Helvetica Neue"',
                    'sans-serif'
                  ].join(','),
    },
    overrides: {
        MuiCssBaseline: {
          '@global': {
            '@font-face': [guthen],
            a: {
              '&:hover': {
                color: '#FFFFFF'
              },
              '&:focus': {
                color: '#FFFFFF'
              }
            },
          },
        },
    },
});

export default theme;
