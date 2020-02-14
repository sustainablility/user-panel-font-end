import React from 'react';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';

import ProcedureIcon from '@material-ui/icons/Memory';
import NewProcedureIcon from '@material-ui/icons/Add';
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";

class ProcedureDisplay extends React.Component {
    state = {
        expend: false
    };

    render() {
        let tangleExpend = () => {
            this.setState({expend: !this.state.expend});
        };
        let procedureListHead = [];
        procedureListHead.push(
            <ListItem>
                <IconButton>
                    <NewProcedureIcon />
                </IconButton>
                <ListItemText
                    primary="New Procedure"
                />
            </ListItem>
        );
        procedureListHead.push(
            <Divider />
        );
        let procedureDisplay = [];
        let procedureList = this.props["procedure"];
        let initialLoopLength;
        let expend = false;
        if (procedureList.length > 5) {
            initialLoopLength = 5;
            expend = true;
        }else {
            initialLoopLength = procedureList.length;
        }
        for (let i = 0; i < initialLoopLength; i ++) {
            procedureDisplay.push(
                <ListItem button>
                    <ListItemIcon>
                        <ProcedureIcon />
                    </ListItemIcon>
                    <ListItemText primary={procedureList[i]} />
                </ListItem>
            );
        }
        if (expend) {
            procedureDisplay.push(
                <ListItem button onClick={tangleExpend}>
                    {this.state.expend ? <ExpandLess /> : <ExpandMore />}
                    <ListItemText primary="More" />
                </ListItem>
            );
            let itemInsideExpend = [];
            for (let i = 5; i < procedureList.length; i ++) {
                itemInsideExpend.push(
                    <ListItem button >
                        <ListItemIcon>
                            <ProcedureIcon />
                        </ListItemIcon>
                        <ListItemText primary={procedureList[i]} />
                    </ListItem>
                );
            }
            procedureDisplay.push(
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
                aria-labelledby="procedureList"
                subheader={
                    <ListSubheader component="div" id="procedureList">
                        Procedures
                    </ListSubheader>
                }
            >
                {procedureListHead}
                {procedureDisplay}
            </List>;

        return thingsToRender;
    }
}

export default ProcedureDisplay;