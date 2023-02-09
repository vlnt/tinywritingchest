import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#555',
      darker: '#ccc',
    },
    neutral: {
      main: '#ccc',
      contrastText: '#ccc',
    },
  },
});


export default theme