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
            main: '#19517a',
            text: '#adc621',
            icons: '#f6a22d'
        },
        secondary: {
            main: '#f6a22d',
        },
        green: {
            default: '#adc621',
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
