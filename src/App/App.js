import { CssBaseline } from '@material-ui/core';
import {
  makeStyles,
  createTheme,
  ThemeProvider
} from '@material-ui/core/styles';
import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#333996',
      light: '#3c44b126'
    },
    secondary: {
      main: '#f83245',
      light: '#f8324526'
    },
    background: {
      default: '#f4f5fd'
    }
  }
});

const useStyles = makeStyles({
  appMain: {
    paddingLeft: '320px',
    width: '100%'
  }
});

const App = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
};

export default App;
