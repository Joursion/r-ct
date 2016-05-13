'use strict';

import React, { Component, ProTypes } from 'react';
import LoginTextFile from '../components/loginBox.jsx';

export default class Login extends Component {
    infoCheck (username, password) {
        if (username === "" || password === "") {
            return {type: "error", content: "用户名或密码不能为空"};
        }
    }
    showErrMsg (type, content) {
        if (type === 'success') {
            return (
                <div style = {{color: 'green'}}>
                    <span>{ content }</span>
                </div>
            )
        } else if (type === 'error') {
            return (
                <div style = {{color: 'red'}}>
                    <span>{ content }</span>
                </div>
            )
        }
    }
    
    render() {

        const { handleLogin } = this.props;
        let style = {
            form:{
                margin: "0 auto",
                width: 210,
                marginTop:100
            },
            input:{
                border: "1px solid #e6e6e6",
                fontSize: 14,
                marginBottom:10,
                height:30,
                width: 210,
                paddingLeft:5
            }
        };
       // console.log(handleLogin);
    //   <input type="text" ref="username" placeholder="用户名" />
                    // <input type="password" ref="password" placeholder="密码" />
      /*  <form style={style.form}>
            <input style={style.input} type="text" ref="username" placeholder="用户名" />
            <input style={style.input} type="password" ref="password" placeholder="密码" />
            <br />
            <button className="btn" onClick = { e => {
                        let username = this.refs.username.value;
                        let password = this.refs.password.value;
                        handleLogin(username, password);
                    }}
                > 登录 </button>
            <button className="btn" onClick = { e => {
                        this.props.history.push('/register');
                    }}
                > 注册 </button>
        </form>*/

        return (
            <div>
                <LoginTextFile handleLogin={handleLogin}/>
            </div>
        )
    }
}