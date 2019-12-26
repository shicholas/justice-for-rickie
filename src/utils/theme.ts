import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import responsiveFontSizes from '@material-ui/core/styles/responsiveFontSizes';

const materialUITheme = createMuiTheme({
  palette: {
    error: {
      main: '#FF9472'
    },
    primary: {
      main: '#3B27BA',
    },
    secondary: {
      main: '#E847AE'
    },
  },
  typography: {
    fontFamily: 'Aestetico, sans-serif',
  },
});

export const theme = responsiveFontSizes(materialUITheme);
