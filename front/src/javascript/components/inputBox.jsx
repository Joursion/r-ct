'use strict';

import React, { Component, ProTypes } from 'react';
import Emotion from './emotion.jsx';
import io from 'socket.io-client';
var emotions = require('./emotion.js');

export default class InputBox extends Component {
    

   constructor(props) {
        super(props)
        this.state = {
            open : "none"
        }
        //this.emotionBtn.bind(this);
    }


    componentDidMount () {
        /*let socket = io();
        socket.emit('ison',"ison");*/
    }
    
    emotionBtn() {
        if (this.state.open == "flex") {
            this.setState({open: "none"});
        } else {
            this.setState({open: "flex"});
        }
        this.state.now = !this.state.now;
        // console.log(this.state);
        // console.log('12');
    }
    
    addEmotion() {
        let input = this.refs.inputMessage;
        input.value += e.target.text;
    }

    insertAtCursor(myValue) {
        let input = this.refs.inputMessage;
        if (input.selectionStart || input.selectionStart === '0') {
            let startpos = input.selectionStart;
            let endpos = input.selectionEnd;
            let restore = input.scrollTop;
            input.value    = input.value.substring(0, startpos) + myValue + input.value.substring(endpos, input.value.length);
            if (restoreTop > 0) {
                input.scrollTop = restoreTop;
            }
            input.focus();
            input.selectionStart = startpos + myValue.length;
            input.selectionEnd = startpos + myValue.length;
        } else {
            input.value += myValue;
            input.focus();
        }
    }

    getDateStr(dat) {
        let y = dat.getFullYear();
        let m = dat.getMonth() + 1;
        m = m < 10 ? '0' + m : m;
        let d = dat.getDate();
        d = d < 10 ? '0' + d : d;
        let h = dat.get
        return y + '-' + m + '-' + d;
    }
    getMessage() {
        let input = this.refs.inputMessage;
        let message = input.value;
        let Mto = 'all';
        //let D = new Date();
        //let time = D.getMonth()  + 1 + '-' + D.getDate() + '  '
         //   + D.getHours() + ':' + D.getMinutes() + ':' + D.getSeconds();
        let time = new Date();
        input.value = "";
        return {
            Mto: Mto,
            message: message,
            time: time.toUTCString()
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
            },
            emotion: {
                display: this.state.open,
                flexWrap: "wrap",
                width: 220,
                height: 120,
                overflow: "auto",
                marginLeft: -220,
                marginTop: -120,
                background: "white"
            },
            emotions: {
                width: 40,
                height: 40,
                background: "white",
                fontSize: "1.5rem",
                border: "none"
            }

        };
        let st = emotions.emotions;
        return (
            <div className="messageInput"
                 style = { style.main }
                >
                <button onClick={ this.emotionBtn.bind(this) } style= {{fontSize: "1.5rem", background: "white", border:"none"}}>😀 </button>
                <Emotion  open = {this.state.open} handleClick = { this.insertAtCursor.bind(this) } >
                </Emotion>
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
                    onChange = {this.handleChange}
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



                // <div className = "emotions" style = { style.emotion }>
                // {
                //     st.map(function (e, index) {
                //         return <button key = {index} style = { style.emotions } onClick= { this.insertAtCursor}> {e} </button>
                //     })
                // }   
                // </div>