import React from 'react';
import OneProcedure from './OneProcedure';

class ProcedureDisplay extends React.Component {
    render() {
        let procedureList = this.props["procedure"];
        let procedureDisplay = [];
        for (let dataset of procedureList) {
            procedureDisplay.push(
                <OneProcedure procedureName={dataset}/>
            );
        }
        return procedureDisplay;
    }
}

export default ProcedureDisplay;