import React from 'react';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DatasetIcon from '@material-ui/icons/BarChart';
import IconButton from "@material-ui/core/IconButton";
import Collapse from '@material-ui/core/Collapse';

import NewDatasetIcon from '@material-ui/icons/Add';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import Divider from "@material-ui/core/Divider";

class DatasetDisplay extends React.Component {
    state = {
        expend: false
    };
    render() {
        let tangleExpend = () => {
            this.setState({expend: !this.state.expend});
        };
        let datasetListHead = [];
        datasetListHead.push(
            <ListItem>
                <IconButton>
                    <NewDatasetIcon />
                </IconButton>
                <ListItemText
                    primary="New Dataset"
                />
            </ListItem>
        );
        datasetListHead.push(
            <Divider />
        );
        let datasetList = this.props["dataset"];
        let datasetDisplay = [];
        let initialLoopLength;
        let expend = false;
        if (datasetList.length > 5) {
            initialLoopLength = 5;
            expend = true;
        }else {
            initialLoopLength = datasetList.length;
        }
        for (let i = 0; i < initialLoopLength; i ++) {
            datasetDisplay.push(
                <ListItem button>
                    <ListItemIcon>
                        <DatasetIcon />
                    </ListItemIcon>
                    <ListItemText primary={datasetList[i]} />
                </ListItem>
            );
        }
        if (expend) {
            datasetDisplay.push(
                <ListItem button onClick={tangleExpend}>
                    {this.state.expend ? <ExpandLess /> : <ExpandMore />}
                    <ListItemText primary="More" />
                </ListItem>
            );
            let itemInsideExpend = [];
            for (let i = 5; i < datasetList.length; i ++) {
                itemInsideExpend.push(
                    <ListItem button >
                        <ListItemIcon>
                            <DatasetIcon />
                        </ListItemIcon>
                        <ListItemText primary={datasetList[i]} />
                    </ListItem>
                );
            }
            datasetDisplay.push(
                <Collapse in={this.state.expend} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {itemInsideExpend}
                    </List>
                </Collapse>
            )
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
                {datasetListHead}
                {datasetDisplay}
            </List>;

        return thingsToRender;
    }
}

export default DatasetDisplay;