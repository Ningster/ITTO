import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';

const styles = {
    logo : {
        flex: 1,
        textDecoration: 'none',
        color:'white',
    }
}

class TopAppBar extends React.Component {
    public render() {
        return (
            <div>
                <AppBar>
                    <Toolbar>
                        <IconButton color='inherit' aria-label='Menu' style={{marginRight: '20px'}}>
                            <MenuIcon />
                        </IconButton>
                        <Link to='/' style={styles.logo}>
                            <Typography color='inherit' variant='h6'>
                                ITTO
                            </Typography>
                        </Link>
                        <IconButton color='inherit' aria-label='Login' >
                            <AccountCircle />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default TopAppBar;
