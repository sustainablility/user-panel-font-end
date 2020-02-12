import React from 'react';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DatasetIcon from '@material-ui/icons/Storage';

class ProcedureDisplay extends React.Component {
    render() {
        let procedureList = this.props["procedure"];
        let procedureDisplay = [];
        for (let oneProcedure of procedureList) {
            procedureDisplay.push(
                <ListItem button>
                    <ListItemIcon>
                        <DatasetIcon />
                    </ListItemIcon>
                    <ListItemText primary={oneProcedure} />
                </ListItem>
            );
        }
        let thingsToRender =
            <List
                component="nav"
                aria-labelledby="procedureList"
                subheader={
                    <ListSubheader component="div" id="procedureList">
                        Procedures
                    </ListSubheader>
                }
            >
                {procedureDisplay}
            </List>;

        return thingsToRender;
    }
}

export default ProcedureDisplay;