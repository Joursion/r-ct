import React, { Component, ProTypes } from 'react';

export default class API extends Component {


    render() {
        let style = {
            flex: 1,
            paddingTop: 100
        };
        return (
            <div style = {style}>
                <h1>GET /api/message</h1>
                无参数
                返回格式
                示例: <a href=""> /api/messages </a>
                {"{success: true, data[{content:'test', id:''....}]}"}
                <h1>POST /api/message</h1>
                user:{"{username: String, avatar: String, time: Date, content: String}"}
                示例: <a href=""> /api/messages </a>
                返回数据: {"{success:true, data:req.data}"}
                
                <h1>POST /api/login</h1>
                user: String, password: String
                或者 token: String
                返回用户数据.
            </div>
        )

    }
}