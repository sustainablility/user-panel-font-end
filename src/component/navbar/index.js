import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import './index.scss';
import LogOutIcon from '@material-ui/icons/ExitToApp';
import EditProfileIcon from '@material-ui/icons/RecentActors';

class NavBar extends React.Component{
    state = {
        opened: false
    };

    render() {
        let toggleDrawer = (open) => event => {
            if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
                return;
            }
            this.setState({ opened: open });
        };

        return (
            <div>
                <Button color={"primary"} className={"user-panel-navbar-openButton"} onClick={toggleDrawer(true)}>Hi, this is RRworkflow</Button>
                <SwipeableDrawer
                    open={this.state.opened}
                    onClose={toggleDrawer(false)}
                    onOpen={toggleDrawer(true)}
                >
                    <div
                        className={"Test"}
                        role="presentation"
                        onClick={toggleDrawer(false)}
                        onKeyDown={toggleDrawer(false)}
                    >
                        <List>
                            <ListItem button>
                                <ListItemIcon><HomeIcon /></ListItemIcon>
                                <ListItemText primary={"RR Workflow Panel"} />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon><EditProfileIcon /></ListItemIcon>
                                <ListItemText primary={"Edit Your Profile"} />
                            </ListItem>
                        </List>
                        <Divider />
                        <List>
                            <ListItem button>
                                <ListItemIcon><LogOutIcon /></ListItemIcon>
                                <ListItemText primary={"Log Out"} />
                            </ListItem>
                        </List>
                    </div>
                </SwipeableDrawer>
            </div>
        );

    }
}

export default NavBar;