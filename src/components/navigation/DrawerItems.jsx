import React from 'react';
import GamesIcon from '@material-ui/icons/Games';
import DrawerItem from './DrawerItem.jsx';
import CalendarIcon from '@material-ui/icons/CalendarToday';

class DrawerItems extends React.Component {
    render() {
        return(
            <React.Fragment>
                <DrawerItem text="Games" icon={GamesIcon} to='/games' />
                <DrawerItem text="Calendar" icon={CalendarIcon} to='/calendar' />
            </React.Fragment>
        )
    }
}

export default DrawerItems;