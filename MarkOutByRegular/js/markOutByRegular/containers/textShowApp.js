'use strict';
import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import TextShow from '../components/textShow';
import * as showTextActions from '../actions/showTextActions';
import {connect} from 'react-redux';

class CounterApp extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <TextShow
                {...this.props} />
        );
    }
}

export default connect( 
    state =>({state:state.showTextReducers}),
    (dispatch) =>({actions: bindActionCreators(showTextActions, dispatch)})
)(CounterApp);