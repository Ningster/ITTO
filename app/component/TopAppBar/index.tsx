import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';
import theme from '../theme';
import TextField from '@material-ui/core/TextField';
import { LoginLodable } from '@/component/Login';

const styles = {
    logo : {
        flex: 1,
        textDecoration: 'none',
        color:'white',
    },
};

class TopAppBar extends React.Component {
    public state = {
        open: false,
    };

    public handleOpen = () => {
        this.setState({
            open: true,
        });
    }

    public handleClose = () => {
        this.setState({
            open: false,
        });
    }

    public render() {

        return (
            <AppBar position='static' style={{position: 'relative'}}>
                <Toolbar>
                    <IconButton color='inherit' aria-label='Menu' style={{marginRight: '20px'}}>
                        <MenuIcon />
                    </IconButton>
                    <Link to='/' style={styles.logo}>
                        <Typography color='inherit' variant='h6'>
                            FunVote
                        </Typography>
                    </Link>
                    <IconButton color='inherit' aria-label='Login' onClick={this.handleOpen}>
                        <AccountCircle />
                    </IconButton>
                    <LoginLodable handleClose={this.handleClose} open={this.state.open} />
                </Toolbar>
            </AppBar>
        );
    }
}

export default TopAppBar;
