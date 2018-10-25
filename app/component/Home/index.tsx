import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles, createStyles, Theme, WithStyles } from '@material-ui/core/styles';

const styles = ({ palette, spacing } : Theme) => createStyles({
    heroUnit: {
        backgroundColor: palette.background.paper,
    },
    heroContent: {
        padding: `${spacing.unit * 30}px 0 ${spacing.unit * 30}px`,
      },
  });

class Home extends React.Component<WithStyles> {
    public render() {
        const { classes } = this.props;
        return (
            <main>
                {/* Hero unit */}
                <div className={classes.heroUnit}>
                    <div className={classes.heroContent}>
                        <Typography variant='h3' align='center'>
                            You Never Know Until You VOTE!
                        </Typography>
                    </div>
                </div>
            </main>
        );
    }
}

export default withStyles(styles)(Home);
