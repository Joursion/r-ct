'use strict';

import React, { Component, ProTypes } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';
import Avatar from '../components/avatar.jsx';
import InputBox from '../components/inputBox.jsx';
import MessageBox from '../components/messageBox.jsx';

//Store
const Store = require('../store.js');

//Action
const Action = require('../action.js');

export default class Test extends Component {
    
    componentDidMount() {
        let unsubscribe = Store.subscribe(() =>
            console.log(Store.getState())
        );
        
        Store.dispatch(Action.groupMessage('all','test message'));
        
        unsubscribe()
    }
    render() {
        return (
            <div >test</div>
        )    
    }
}