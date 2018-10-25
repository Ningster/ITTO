import * as React from 'react';
import AssignmentInd from '@material-ui/icons/AssignmentInd';
import Modal from '@material-ui/core/Modal';
import theme from '../theme';
import Typography from '@material-ui/core/Typography';
import LineLogInBase from '@/assets/btn_login_base.png';
import LineLogInHover from '@/assets/btn_login_hover.png';
import LineLogInPress from '@/assets/btn_login_press.png';
import { withStyles, createStyles, Theme, WithStyles } from '@material-ui/core/styles';

const styles = ({ palette, spacing } : Theme) => createStyles({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    signInDialog : {
        display: 'flex',
        width: '40%',
        backgroundColor: palette.primary.main,
        padding: '50px',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        borderRadius: '10px',
    },
  });

interface LoginProps extends WithStyles<typeof styles> {
    handleClose : () => void;
    open : boolean;
}

class Login extends React.Component<LoginProps> {
    public state = {
        lineBtn: LineLogInBase,
    };

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
        const { open, handleClose, classes } = this.props;
        return (
            <Modal
                open={open}
                onClose={handleClose}
                className={classes.modal}
                disableAutoFocus={true}
            >
                <div className={classes.signInDialog}>
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
                            onClick={()=>window.location.href = (
                            'https://access.line.me/oauth2/v2.1/authorize?'+
                            'response_type=code&'+
                            'client_id=1616746630&'+
                            'redirect_uri=http://localhost:8080/verifyOauth&'+
                            'state=12345abcde&'+
                            'scope=email%20openid%20profile&'+
                            'nonce=09876xyz'
                            )
                        }
                        />
                    </div>
                </div>
            </Modal>
        );
    }
}

export default withStyles(styles)(Login);
