import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { inject, observer } from 'mobx-react';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import classNames from 'classnames';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';

const drawerWidth = 240;
const styles = theme => ({
  
})

@inject('stores')
@observer
class MenuDrawer extends React.Component {
    render() {
        const { classes, theme, stores } = this.props;
        return(
            
        )
    }
}

export default withStyles(styles, { withTheme: true })(MenuDrawer);