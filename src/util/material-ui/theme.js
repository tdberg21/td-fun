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
      main: '#bada55',
    },
    secondary: {
      main: '#6a1f50',
    },
  },
});

export default theme;
