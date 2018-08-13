import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Switch } from 'react-router';
import Index from '../index/Index.jsx';
import { inject, observer } from 'mobx-react';
import { Route } from 'react-router';

const styles = theme => ({
    
});

@inject('stores')
@observer
class Main extends React.Component {
    render() {
        const { classes } = this.props; 
        return(
            <Switch>
                <Route path='/' component={Index} />
                <Route path='/games' component={Games} />
            </Switch>
        )
    }
}

export default withStyles(styles, { withTheme: true})(Main);