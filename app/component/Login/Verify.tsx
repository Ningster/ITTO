import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

class Verify extends React.Component<RouteComponentProps> {

    public componentDidMount() {
        const { location: { search } } = this.props;
        console.log(this.getOauthCode(search));
    }

    public render() {
        return (
            <div>
                OAuth Verifying...
            </div>
        );
    }

    private getOauthCode(search : string) {
        const urlParams = new URLSearchParams(search);
        return urlParams.get('code');
    }
}

export default Verify;
