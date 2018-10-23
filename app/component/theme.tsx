import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    palette: {
        primary: {
            main: '#263238',
        },
        text: {
            primary: '#000000',
            secondary: '#ffffff',
        }
      },
  });

export default theme;
