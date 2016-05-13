import React, {Component, ProTypes} from 'react';

export default class Setting extends Component{
    
    constructor(props, context){
        super(props, context);
        this.state = {
            show_setting: "none",
            show_avatar: "none"
        }
    }
    
    setting() {
        this.setState({show_setting: "block"});
        console.log("click");
    }
    
    _onShow() {
        this.setState({show_avatar: "block"});
    }
    
    render() {
        let style = {
            dialog: {
                
            },
            avatar: {
                display: this.state.show_avatar
            }
            
        }
        return (
            <div className = "setting"
                style = {style.dialog}
            >
            <button onClick={e =>{this.setting()}}>设置</button> 
                <div style={{
                    display: this.state.show_setting
                }}>
                    <form>
                        <input ref="avatarUrl"/>
                        <button> 确定</button>
                    </form>  
                </div> 
            </div>
        )
    }
}