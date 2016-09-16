import React,{Component} from 'react';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import * as showTextReducers from '../reducers/showTextReducers';
import TextShowApp from './textShowApp';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(showTextReducers);
const store = createStoreWithMiddleware(reducer);

export default class App extends Component{
    render(){
        return(
            <Provider store={store}>
                <TextShowApp />
            </Provider>
        );
    }
}