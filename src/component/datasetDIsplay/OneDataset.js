import React from 'react';
import "./datasetDisplay.scss";
class OneDataset extends React.Component{
    render() {
        let dataset = this.props["datasetName"];
        return<div className={"user-panel-dataset-display"}>
            <a href={"test"}>{dataset}</a>
        </div>;
    }
}
export default OneDataset;