import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';

class DrawerItem extends React.Component {
    render() {
        return(
            <ListItem button component={Link} to={this.props.to}>
                <ListItemIcon>
                    { React.createElement(this.props.icon) }
                </ListItemIcon>
                <ListItemText primary={this.props.text} />
            </ListItem>
        )
    }
}

export default DrawerItem;