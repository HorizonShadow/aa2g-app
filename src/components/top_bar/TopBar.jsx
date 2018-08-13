import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { inject, observer } from 'mobx-react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';



@inject('stores')
@observer
class TopBar extends React.Component {

    render() {
        
    }
}

export default withStyles(styles, { withTheme: true })(TopBar);