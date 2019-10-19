import React from 'react';

import getUserTokenFromCookie from './lib/getUserTokenFromCookie'
import getUserInfoByUserToken from './lib/getUserInfoByUserToken'
import DatasetDisplay from './component/datasetDIsplay/DatasetDisplay'
import ProcedureDisplay from "./component/procedureDIsplay/ProcedureDisplay";
import setCookie from "./lib/setCookieForTesting";
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
        let renderItem = [];

        renderItem.push(<div>
            <DatasetDisplay dataset={this.userInfo["databases"]}/>
        </div>);

        renderItem.push(
            <ProcedureDisplay procedure={this.userInfo["procedures"]}/>
        );
        return renderItem;
    }
}

export default App;
