import * as React from 'react';
import Loadable from 'react-loadable';
import Logo from '@/assets/logo.png';
import Loading from '@/component/Loading';
import TopAppBar from '@/component/TopAppBar';
import Home from '@/component/Home';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

const Test = Loadable({
    loader: () => import(/* webpackChunkName: "Header" */ '@/component/Header'),
    loading: Loading
});

class Main extends React.Component {
    public render() {
        return (
            <BrowserRouter>
                <div>
                    <TopAppBar />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route render={()=><Redirect to='/' />} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

const AppMain = <Main />;

export { AppMain };
