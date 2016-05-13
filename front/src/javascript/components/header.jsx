'use strict';

import React, { Component, ProTypes } from 'react';
import { Link, IndexLink } from 'react-router';

export default class Header extends Component {
    constructor(props, context) {
        super(props, context);
    }
    
    render() {
        let { handleLogout, user, isLogin } = this.props;
        let style = {
            nav:{
                display:"flex",
                alignItems: "center",
                justifyContent:"flex-end",
                fontSize: "1rem"
            },
            logo: {
                fontSize: "2rem"
            },
            header: {
                display:"flex",
                height: 60,
                justifyContent:"space-between"
            },
            link:{
                marginLeft:10
            }

        };

        return (
            <header style = {style.header} >
                <div className="logo" style= {style.logo}>
                    ChatRoom
                </div>
                <nav className="nav" style = {style.nav}>
                    <IndexLink style = {style.link} to = "/index">Home</IndexLink>
                    <IndexLink style = {style.link} to = "/about">About</IndexLink>
                    <IndexLink style = {style.link} to = "/api">API</IndexLink>
                    <div style = {{display: isLogin ? "block" :"none"}} >
                        <IndexLink style = {style.link} to = "/index" onClick={e => handleLogout()}>Logout</IndexLink> 
                    </div>
                            <div style = {{display: isLogin ? "none" :"block"}}>
                                <IndexLink style = {style.link} to = "/login">Login</IndexLink>
                                <IndexLink style = {style.link} to = "/register">register</IndexLink>
                            </div>
                </nav>
            </header>
        )
    }
}