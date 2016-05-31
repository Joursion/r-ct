'use strict';

import React, { Component, ProTypes } from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';

export default class Login extends Component {
    
    constructor(props, context) {
        super(props, context);
        this.state = {
            input_err: undefined,
            pwd_err: undefined
        }
    }

    getChildContext() {
        return { muiTheme: getMuiTheme(baseTheme) };
    }
    
     vaildCheck (username, password) {
        
        let name_length = username.length;
        let pwd_length = password.length;
        console.log(name_length, pwd_length);
        if (name_length < 2 || name_length > 20) {
            this.setState({input_err: "用户名需要大于2个字符小于20个字符"});
            return false;
        } else {
            this.setState( {input_err: undefined} );
        }
        
        if (pwd_length < 6 || pwd_length > 12) {
            this.setState({pwd_err: "密码应大于6位小于12位"});
            return false;
        } else {
            this.setState({pwd_err: undefined});
        }
        return true;
        
        // if(name_length >=2 && name_length <= 20 && pwd_length >=6 && pwd_length <= 12) {
        //     this.setState({btn_disabled: false});
        //     return false;
        // } else {
        //     this.setState({btn_disabled: true});
        //     return true;
        // }
    }
    
    render() {
        const { handleLogin } = this.props;
        let style = {
            margin: "0 auto",
            width: 256,
            marginTop: 100
        };
        
        return (
             <div style={style}>
                <TextField
                    hintText="请在10个字符内"
                    floatingLabelText="用户名"
                    type="text"
                    ref="username"
                    onChange = { this._onChange }
                    errorText = {this.state.input_err}
                    /><br />
                <TextField
                    hintText="6-12英文和数字"
                    floatingLabelText="密码"
                    type="password"
                    ref="password"
                    onChange = { this._onChange}
                    errorText = {this.state.pwd_err}
                    /><br />
                <RaisedButton onMouseDown = {
                        e => {
                        let username = this.refs.username.getValue();
                        let password = this.refs.password.getValue();
                        if (!this.vaildCheck.bind(this)(username, password)) {
                            return ;
                        }
                        console.log('login', username, password);
                        handleLogin(username, password);
                    }
                } label="登陆"  ref="btn_login"/>
            </div>
        )
    }
}

Login.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired
};
