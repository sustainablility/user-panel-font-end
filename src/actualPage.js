import React from 'react';

import DatasetDisplay from './component/datasetDIsplay/DatasetDisplay'
import ProcedureDisplay from "./component/procedureDIsplay/ProcedureDisplay";
import "uikit/dist/css/uikit.css";
import uikitIcon from './uikit-icons';
import scriptLoader from 'react-async-script-loader';

class ActualPage extends React.Component{
    componentDidMount() {
        uikitIcon();
    }

    render() {
        let renderItem = [];
        let navbar =
            <nav className="uk-navbar-container">
                <div className="uk-navbar-left">
                    <ul className="uk-navbar-nav">
                        <li className="uk-active">
                            <a href={""}>RRworkflow</a>
                        </li>
                        <li className="uk-parent">
                            <a href={""}>Edit profile</a>
                        </li>
                        <li className={"uk-parent"}>
                            <a href={""}>Log out</a>
                        </li>
                    </ul>
                </div>
            </nav>;
        renderItem.push(navbar);
        let section = <div className="uk-section uk-section-muted">
            <div className="uk-container">
                <div className="uk-grid-match uk-child-width-1-3@m uk-grid">
                    <div>
                        <div>
                            <h3>Dataset</h3>
                            <DatasetDisplay dataset={this.props.userInfo["databases"]}/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3>Procedure</h3>
                            <ProcedureDisplay procedure={this.props.userInfo["procedures"]}/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3>Tools</h3>
                            <div>
                                <span className="uk-margin-small-right" uk-icon="check"></span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>;
        renderItem.push(section);
        return renderItem;
    }

}

export default ActualPage;
