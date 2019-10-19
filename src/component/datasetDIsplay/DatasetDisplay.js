import React from 'react';
import OneDataset from './OneDataset';

class DatasetDisplay extends React.Component {
    render() {
        let datasetList = this.props["dataset"];
        let datasetDisplay = [];
        for (let dataset of datasetList) {
            datasetDisplay.push(
                <OneDataset datasetName={dataset}/>
            );
        }
        return datasetDisplay;
    }
}

export default DatasetDisplay;