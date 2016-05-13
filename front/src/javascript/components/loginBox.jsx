import React, { Component, ProTypes } from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';


export default class LoginTextFile extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            input_err: undefined,
            pwd_err: undefined,
            btn_disabled: true
        }
    }

    getChildContext() {
        return { muiTheme: getMuiTheme(baseTheme) };
    }
    
    _onChange(e, value){
        let name = this.refs.username;
        let pwd = this.refs.password;
        let btn = this.refs.btn_login;
        
        let name_length = name.getValue().length;
        let pwd_length = pwd.getValue().length;
        console.log(name_length, pwd_length);
        if (name_length < 2 || name_length > 20) {
            this.setState({input_err: "用户名需要大于2个字符小于20个字符"});
        } else {
            this.setState({input_err: undefined});
        }
        if (pwd_length < 6 || pwd_length > 12) {
            this.setState({pwd_err: "密码应大于6位小于12位"});
        } else {
            this.setState({pwd_err: undefined});
        }
        if(name_length >=2 && name_length <= 20 && pwd_length >=6 && pwd_length <= 12) {
            this.setState({btn_disabled: false});
        } else {
            this.setState({btn_disabled: true});
        }
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
                    onChange = { this._onChange.bind(this,'username') }
                    errorText = {this.state.input_err}
                    /><br />
                <TextField
                    hintText="6-12英文和数字"
                    floatingLabelText="密码"
                    type="password"
                    ref="password"
                    onChange = { this._onChange.bind(this,'password')}
                    errorText = {this.state.pwd_err}
                    /><br />
                <RaisedButton onMouseDown = {
                        e => {
                        let username = this.refs.username.getValue();
                        let password = this.refs.password.getValue();
                        console.log('login', username, password);
                        handleLogin(username, password);
                    }
                } label="登陆" disabled={this.state.btn_disabled} ref="btn_login"/>
            </div>
        )
    }
}

LoginTextFile.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired
};
