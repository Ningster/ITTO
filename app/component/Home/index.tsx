import * as React from 'react';
import Typography from '@material-ui/core/Typography';

class Home extends React.Component {
    public render() {
        return (
            <div style={{display:'flex', justifyContent: 'center', marginTop:'30%'}}>
                <Typography variant='h5'>
                    You Never Know Until You VOTE!
                </Typography>
            </div>
        );
    }
}

export default Home;
