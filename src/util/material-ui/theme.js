import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      label: {
        textTransform: 'none',
      },
    },
    MuiListItemIcon: {
      root: {
        color: 'inherit',
      },
    },
  },
  palette: {
    primary: {
      main: '#333',
    },
    secondary: {
      main: '#ffffff',
    },
  },
});

export default theme;
