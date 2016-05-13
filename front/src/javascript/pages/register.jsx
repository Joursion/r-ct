'use strict';

import React from 'react';
import RegBox from '../components/regBox.jsx';

export default class Register extends React.Component {
    
    
    //   handleRegister(username, password);
    /*render() {
        const { handleRegister, handleRegInfoCheck } = this.props;
      //  console.log(handleRegister);
        
        return (
            <div>
                <form>
                    <input type="text" ref="username" placeholder="用户名" />
                    <input type="password" ref="password" placeholder="密码" />
                </form>
                <button onClick = { e => {
                        let username = this.refs.username.value;
                        let password = this.refs.password.value;
                        {
                            if(!this.checkRegInfo.bind(this)(username, password)){
                                return;
                            }
                        }
                        handleRegister(username, password);
                    }}
                    > 注册 </button>
            </div>
        )
    }*/


    render() {

        const { handleRegister, handleRegInfoCheck } = this.props;
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
        /*<form style={style.form}>
         <input style={style.input} type="text" ref="username" placeholder="用户名" />
         <input style={style.input} type="password" ref="password" placeholder="密码" />
         <input style={style.input} type="password" ref="rpassword" placeholder="确认密码" />
         <br />
         <button className="btn" onClick = { e => {
         let username = this.refs.username.value;
         let password = this.refs.password.value;
         handleRegister(username, password);
         }}
         > 完成 </button>
         <button className="btn" onClick = { e => {
         this.props.history.push('/login');
         }}
         > 我想登陆 </button>
         </form>*/
        return (
            <div>
                <RegBox handleRegister={handleRegister} />
            </div>
        )
    }
}