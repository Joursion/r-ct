'use strict';

import React, {Component, ProTypes} from 'react';
import Setting from './setting.jsx';
import SettingDialog from './dialog.jsx';

export default class User extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        let style = {
            img:{
                width: 50,
                height: 50,
                borderRadius: 50,
                margin: "0 auto"
            },
            user:{
                display: "flex",
                flexDirection: "column",
                margin: "0 auto"
            },
            name: {
                fontSize: "1.2rem",
                marginTop: 10
            }


        };
        

        let {isLogin, avatar, username} = this.props;
       // console.log('user', isLogin);
        return (
            <div className="user" style={style.user}>
                <img src={avatar} style = {style.img}/>
                <span style={style.user}>{ username }</span>
                {
                    isLogin ? <SettingDialog /> : <span>你还是一个游客,请登陆以便更好地体验</span>
                }
            </div>
        )
    }
}