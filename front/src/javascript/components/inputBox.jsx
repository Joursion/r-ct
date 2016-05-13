'use strict';

import React, { Component, ProTypes } from 'react';
import io from 'socket.io-client';

export default class InputBox extends Component {

    /*sendMessageCheck (message) {
        if (message.trim() === '') {
            return false;
        }
        return true;
    }*/

    componentDidMount () {
        /*let socket = io();
        socket.emit('ison',"ison");*/
    }

    constructor(props, context) {
        super(props, context);
    }

    getMessage() {
        let input = this.refs.inputMessage;
        let message = input.value;
        let Mto = 'all';
        //let D = new Date();
        //let time = D.getMonth()  + 1 + '-' + D.getDate() + '  '
         //   + D.getHours() + ':' + D.getMinutes() + ':' + D.getSeconds();
        let time = Date.now();
        input.value = "";
        return {
            Mto: Mto,
            message: message,
            time: time
        };
    }

    render() {
        let { handleSendMessage, user } = this.props;
      //  console.log('user', user);
       // console.log('handleSendMessage', handleSendMessage);
        let style = {
            main:{
                display: "flex",
                height: 40,
                flexDirection: "row",
                marginTop: 10
            },
            inputBox: {
                flex:8,
                padding: "5px 3px"
            },
            btn:{
                flex:1
            }

        };

        return (
            <div className="messageInput"
                 style = { style.main }
                >
                <input
                    type = 'text'
                    className = 'input-message'
                    ref = 'inputMessage'
                    maxLength = {512}
                    style = { style.inputBox }
                    onKeyDown={ e => {
                        if (e.keyCode === 13 && !e.shiftKey) {
                            let msg = this.getMessage.bind(this)();
                            e.preventDefault();
                            handleSendMessage(msg.message, msg.Mto, user, msg.time);
                        }
                    } }

                    />
                <button
                    className="btn"
                    style = { style.btn }
                    onClick = { e => {
                    let msg = this.getMessage.bind(this)();
                    handleSendMessage(msg.message, msg.Mto, user, msg.time);
                }}
                >发送</button>
            </div>
        )
    }
}