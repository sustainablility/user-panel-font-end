import React from 'react';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DatasetIcon from '@material-ui/icons/Storage';

class DatasetDisplay extends React.Component {
    render() {
        let datasetList = this.props["dataset"];
        let datasetDisplay = [];
        for (let dataset of datasetList) {
            datasetDisplay.push(
                <ListItem button>
                    <ListItemIcon>
                        <DatasetIcon />
                    </ListItemIcon>
                    <ListItemText primary={dataset} />
                </ListItem>
            );
        }
        let thingsToRender =
            <List
                component="nav"
                aria-labelledby="datasetList"
                subheader={
                    <ListSubheader component="div" id="datasetList">
                        Dataset
                    </ListSubheader>
                }
            >
                {datasetDisplay}
            </List>;

        return thingsToRender;
    }
}

export default DatasetDisplay;