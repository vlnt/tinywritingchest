import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#ccc',
      darker: '#ccc',
    },
    neutral: {
      main: '#ccc',
      contrastText: '#ccc',
    },
  },
});


export default theme