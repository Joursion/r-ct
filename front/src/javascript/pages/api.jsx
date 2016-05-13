import React, { Component, ProTypes } from 'react';

export default class API extends Component {


    render() {
        let style = {
            flex: 1,
            paddingTop: 100
        };
        return (
            <div style = {style}>
                <h1>get messages</h1>
                无参数
                示例: <a href=""> /api/messages </a>
                <h1>get user</h1>
                -
                示例: <a href=""> /api/messages </a>
            </div>
        )

    }
}