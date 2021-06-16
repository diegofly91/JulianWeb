import { createMuiTheme } from '@material-ui/core/styles';

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
    },
    overrides: {
        MuiCssBaseline: {
          '@global': {
            '@font-face': [guthen],
          },
        },
        a: {
          '&:hover': {
            color: '#FFFFFF'
          }
        },
    },
});

export default theme;
