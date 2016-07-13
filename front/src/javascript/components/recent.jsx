import React, { Component, ProTypes } from 'react';
import {List, ListItem} from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import Avatar from 'material-ui/Avatar'

export default class RecentList extends Component  {
    
    getChildContext() {
        return { muiTheme: getMuiTheme(baseTheme) };
    }
    
    render() {
        let style = {
            avatar: {
                width: "50",
                height: "50",
                borderRadius: "50"
            }
        }
        return (
            <List>
                <Subheader>最近对话</Subheader>
                <ListItem
                    primaryText = "Lim"
                    leftAvatar = { <Avatar  src="https://tse1-mm.cn.bing.net/th?id=OIP.M4b8881c6a7f535a4fd9e131e131ef550o0&w=113&h=110&c=7&rs=1&qlt=90&pid=3.1&rm=2" />}
                />
                <ListItem
                    primaryText = "GG"
                    leftAvatar = { <Avatar  src="https://tse1-mm.cn.bing.net/th?id=OIP.M4b8881c6a7f535a4fd9e131e131ef550o0&w=113&h=110&c=7&rs=1&qlt=90&pid=3.1&rm=2" />}
                />
            </List>       
        )
    }
}

//export default RecentList
RecentList.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired
};