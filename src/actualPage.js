import React from 'react';

import DatasetDisplay from './component/datasetDIsplay/DatasetDisplay'
import ProcedureDisplay from "./component/procedureDIsplay/ProcedureDisplay";
import Navbar from "./component/navbar/test";
import Grid from '@material-ui/core/Grid';


class ActualPage extends React.Component{


    render() {
        let renderItem = [];
        renderItem.push(<Navbar />);
        let section =
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <DatasetDisplay dataset={this.props.userInfo["databases"]}/>
                </Grid>
                <Grid item xs={4}>
                    <ProcedureDisplay procedure={this.props.userInfo["procedures"]}/>
                </Grid>
                <Grid item xs={4}>
                    <DatasetDisplay dataset={this.props.userInfo["databases"]}/>
                </Grid>

            </Grid>;
        renderItem.push(section);
        return renderItem;
    }

}

export default ActualPage;
