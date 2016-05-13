'use strict';

import React, { Component, PropTypes } from 'react';
import Message from './message.jsx';
import Store from '../store.js';

export default class messageBox extends Component{

    componentDidUpdate(){
        let msgBox = this.refs.msgBox;
        let maxHeight = msgBox.scrollHeight - msgBox.clientHeight;
        let lastElement = msgBox.lastElementChild;
       // console.log('height',maxHeight, lastElement.offsetHeight);
        if (lastElement && msgBox.scrollTop >= maxHeight - lastElement.offsetHeight - 10) {
            msgBox.scrollTop = msgBox.scrollHeight;
        }
    }
    
    componentDidMount() {
        setTimeout(() => {
            let msgBox = this.refs.msgBox;
            msgBox.scrollTop = msgBox.scrollHeight || 0;
        }, 100);
    }
   
    render() {
        let { message } = this.props;
        message = message || [];

        let style = {
            flex: '1 1 0',
            overflow: 'auto'
        };

        return(
            <div style = {style} ref ="msgBox">
                {
                    message.map(function(msg, index) {
                        return <Message key = {index} message = {msg}/>
                    })
                }
            </div>
        );
    }
    
}

/*
messageBox.propTypes = {
    message : PropTypes.array.isRequired
};
*/


