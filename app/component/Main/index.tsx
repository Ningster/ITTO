import * as React from 'react';
import Loadable from 'react-loadable';
import Logo from '@/assets/logo.png';
import Loading from '@/component/Loading';
import TopAppBar from '@/component/TopAppBar';
import Home from '@/component/Home';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
import theme from '@/component/theme';
import { VerifyOAuthLodable } from '@/component/Login';
import CssBaseline from '@material-ui/core/CssBaseline';

const Test = Loadable({
    loader: () => import(/* webpackChunkName: "Header" */ '@/component/Header'),
    loading: Loading
});

class Main extends React.Component {
    public render() {
        return (
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <BrowserRouter>
                    <React.Fragment>
                        <TopAppBar/>
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route exact path='/verifyOauth' component={VerifyOAuthLodable} />
                            <Route render={()=><Redirect to='/' />} />
                        </Switch>
                    </React.Fragment>
                </BrowserRouter>
            </MuiThemeProvider>
        );
    }
}

const AppMain = <Main />;

export default AppMain;
