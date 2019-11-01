import React from 'react';
import {procedureEditorUrl} from "../../config";

class OneProcedure extends React.Component{
    render() {
        let procedure = this.props["procedureName"];
        return <div><a target={"_blank"} href={procedureEditorUrl + procedure}>{procedure}</a></div>;
    }
}
export default OneProcedure;