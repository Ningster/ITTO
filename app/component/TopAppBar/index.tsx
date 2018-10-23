import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AssignmentInd from '@material-ui/icons/AssignmentInd';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';
import UserSignin from '@/component/UserSignin';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import theme from '../theme';
import TextField from '@material-ui/core/TextField';
import LineLogInBase from '@/assets/btn_login_base.png';
import LineLogInHover from '@/assets/btn_login_hover.png';
import LineLogInPress from '@/assets/btn_login_press.png';

const styles = {
    logo : {
        flex: 1,
        textDecoration: 'none',
        color:'white',
    },
    // signin : {
    //     textDecoration: 'none',
    //     color:'white',
    // },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    signInDialog : {
        display: 'flex',
        width: '40%',
        backgroundColor: theme.palette.primary.main,
        padding: '50px',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        borderRadius: '10px',
    }
};

class TopAppBar extends React.Component {
    public state = {
        open: false,
        lineBtn: LineLogInBase,
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

    public handleMouseOver = () => {
        this.setState({
            lineBtn: LineLogInHover,
        });
    }

    public handleMouseLeave = () => {
        this.setState({
            lineBtn: LineLogInBase,
        });
    }

    public handleMouseDown = () => {
        this.setState({
            lineBtn: LineLogInPress,
        });
    }

    public render() {

        return (
            <AppBar>
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
                    <Modal
                        open={this.state.open}
                        onClose={this.handleClose}
                        style={styles.modal}
                        disableAutoFocus={true}
                    >
                        <div style={styles.signInDialog}>
                            <AssignmentInd style={{color: theme.palette.primary.contrastText,marginRight:'10px',width:'50px'}}/>
                            <Typography variant='h6' id='modal-title' color='textSecondary' style={{marginBottom: '50px'}}>
                                Connect with
                            </Typography>
                            <div
                                onMouseEnter={this.handleMouseOver}
                                onMouseLeave={this.handleMouseLeave}
                                onMouseDown={this.handleMouseDown}
                                style={{cursor:'pointer'}}
                            >
                                <img
                                    src={this.state.lineBtn}
                                    alt='LINE Log In'
                                />
                            </div>
                        </div>
                    </Modal>
                </Toolbar>
            </AppBar>
        );
    }
}

export default TopAppBar;
