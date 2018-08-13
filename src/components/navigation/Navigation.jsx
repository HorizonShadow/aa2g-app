import React from 'react';
import { observer, inject } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from '@material-ui/core/Divider';
import classNames from 'classnames';
import DrawerItems from './DrawerItems.jsx';

const drawerWidth = 240;
const styles = theme => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        })
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    hide: {
        display: 'none'
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing.unit * 7,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing.unit * 9,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
    },
})

@inject('stores')
@observer
class Navigation extends React.Component {
    render() {
        const { classes, theme, stores } = this.props;
        console.log(classNames);
        return(
            <React.Fragment>
                <AppBar position='absolute' color='default' className={classNames(classes.appBar, stores.appStore.drawerOpen && classes.appBarShift)}>
                    <Toolbar>
                        <IconButton color="inherit" 
                                    aria-label="Menu"
                                    className={classNames(classes.menuButton, stores.appStore.drawerOpen && classes.hide)}
                                    onClick={stores.appStore.toggleDrawer}>
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="title" color="inherit">Title</Typography>
                    </Toolbar>
                </AppBar>
                <Drawer variant='permanent' 
                    open={this.props.stores.appStore.drawerOpen}
                    classes={{
                        paper: classNames(classes.drawerPaper, !stores.appStore.drawerOpen && classes.drawerPaperClose)
                    }}
                 >
                    <div className={classes.toolbar}>
                        <IconButton onClick={this.props.stores.appStore.closeDrawer}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </div>
                    <Divider />
                    <DrawerItems />
                </Drawer>
                <main className={classes.content}>
                    <div className={classes.toolbar}>
                        {this.props.children}
                    </div>
                </main>
            </React.Fragment>
        )
    }
}

export default withStyles(styles, { withTheme: true})(Navigation);