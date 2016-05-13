import React, { Component, ProTypes } from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';


export default class RegTextFile extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            input_err: undefined,
            pwd_err: undefined,
            rpwd_err: undefined,
            btn_disabled: true
        }
    }

    getChildContext() {
        return { muiTheme: getMuiTheme(baseTheme) };
    }
    
    _onChange(e, value){
        let name = this.refs.username;
        let pwd = this.refs.password;
        let rpwd = this.refs.repassword;
        
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
        if(pwd.getValue() != rpwd.getValue()) {
            this.setState({rpwd_err: "两次密码不一致"});
        } else {
            this.setState({rpwd_err: undefined});
        }
        
        if(name_length >=2 && name_length <= 20 && pwd_length >=6 && pwd_length <= 12 
            && pwd.getValue() == rpwd.getValue()) {
            this.setState({btn_disabled: false})
        } else{
            this.setState({btn_disabled: true})
        }
    }

    render() {
        const { handleRegister } = this.props;
        let style = {
            margin: "0 auto",
            width: 256,
            marginTop: 100
        };

        return (
            <div style={style} >
                <TextField
                    hintText="请在20个字符内"
                    floatingLabelText="用户名"
                    type="text"
                    ref="username"
                    errorText={this.state.input_err}
                    onChange = { this._onChange.bind(this)}
                    /><br />
                <TextField
                    hintText="6-12英文和数字"
                    floatingLabelText="密码"
                    type="password"
                    ref="password"
                    errorText={this.state.pwd_err}
                    onChange = { this._onChange.bind(this)}
                    /><br />
                <TextField
                    hintText="  确认密码, 6-12英文和数字"
                    floatingLabelText="确认密码"
                    type="password"
                    ref="repassword"
                    errorText={this.state.rpwd_err}
                    onChange = { this._onChange.bind(this)}
                    /><br />
                <RaisedButton onMouseDown = {
                        e => {
                        let username = this.refs.username.getValue();
                        let password = this.refs.password.getValue();
                        console.log('login', username, password);
                        handleRegister(username, password);
                    }
                } label="注册" ref="btn_reg" disabled={this.state.btn_disabled}/>
            </div>
        )
    }
}

RegTextFile.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired
};
