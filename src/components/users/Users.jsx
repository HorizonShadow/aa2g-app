import React from 'react';
import { withStyles } from '@material-ui/core/styles';

@inject('stores')
@observer
class Users extends React.Component {
    render() {
        const { classes } = this.props;
    }
}

export default withStyles(styles, { withTheme: true })(Users);