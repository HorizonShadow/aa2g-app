import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { inject, observer } from 'mobx-react';

const styles = theme => {

}

@inject('stores')
@observer
class Index extends React.Component {
    render() {
        const { classes } = this.props;
        return(
            <div></div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(Index);