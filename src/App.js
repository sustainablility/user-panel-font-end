import React from 'react';

import getUserTokenFromCookie from './lib/getUserTokenFromCookie'
import getUserInfoByUserToken from './lib/getUserInfoByUserToken'
import DatasetDisplay from './component/datasetDIsplay/DatasetDisplay'
import ProcedureDisplay from "./component/procedureDIsplay/ProcedureDisplay";
import setCookie from "./lib/setCookieForTesting";
import AddProcedure from "./component/procedureDIsplay/addProcedure";
import {indexURL} from './config';
import ActualPage from "./actualPage";
import "uikit/dist/css/uikit.css";
import scriptLoader from 'react-async-script-loader';


class App extends React.Component{
    state = {
        loaded: false
    };

    constructor(props) {
        super(props);
        this.init();

    }

    async init() {
        setCookie();
        let userToken = await getUserTokenFromCookie();
        if (userToken === null) {
            console.log("user token not found");
            window.alert("Please Login");
            window.location.href = indexURL
        }
        let userInfo = await getUserInfoByUserToken(userToken);
        if (userInfo === null) {
            console.log("Token Expired");
            window.alert("Please Login");
            window.location.href = indexURL
        }
        this.userInfo = userInfo;
        this.setState({userToken: userToken});
        this.setState({loaded: true});
    }

    componentDidMount() {

    }


    render() {
        if (!this.state.loaded) {
            return (<div>Loading</div>);
        }

        return <ActualPage userInfo={this.userInfo} />;
    }
}

export default App;
