import React from 'react';

class OneDataset extends React.Component{
    render() {
        let dataset = this.props["datasetName"];
        return <div><a href={"test"}>{dataset}</a></div>;
    }
}
export default OneDataset;