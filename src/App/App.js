import {
  makeStyles,
  createTheme,
  ThemeProvider
} from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';

import './App.css';
import Header from '../components/Header';
import PageHeader from '../components/PageHeader';
import SideMenu from '../components/SideMenu';

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
  },
  // shape: {
  //   borderRadius: '12px'
  // }
  overrides: {
    MuiAppBar: {
      root: {
        transform: 'translateZ(0)'
      }
    }
  },
  props: {
    MuiIconButton: {
      disableRipple: true
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
        <PageHeader
          title="Page Header"
          subTitle="Page description"
          icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
        />
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
};

export default App;
