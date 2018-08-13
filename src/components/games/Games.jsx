import React from 'react';
import { inject, observer } from 'mobx-react';
import { fromStyles } from '@material-ui/core/styles';

const styles = theme => {

};

@inject('stores')
@observer
class Games extends React.Component {
    render() {
        return(
            
        )
    }
}

export default withStyles(styles, { withTheme: true })(Games);