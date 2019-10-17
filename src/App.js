import React from 'react';

import getUserTokenFromCookie from './lib/getUserTokenFromCookie'
import getUserInfoByUserToken from './lib/getUserInfoByUserToken'
import {indexURL} from './config';

class App extends React.Component{
    state = {
        loaded: false
    };

    constructor(props) {
        super(props);
        this.init();

    }

    async init() {
        let userToken = getUserTokenFromCookie();
        let userInfo = await getUserInfoByUserToken(userToken);
        if (userInfo === null) {
            window.location.href = indexURL
        }
        this.userInfo = userInfo;
        this.setState({loaded: true})
    }
    componentDidMount() {

    }


    render() {
        if (!this.state.loaded) {
            return (<div>Loading</div>);
        }
        return (
            <div>{this.userInfo.id}</div>
        );
    }
}

export default App;
