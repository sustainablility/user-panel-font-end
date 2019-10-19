import React from 'react';

class OneProcedure extends React.Component{
    render() {
        let procedure = this.props["procedureName"];
        return <div><a href={"test"}>{procedure}</a></div>;
    }
}
export default OneProcedure;