import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

/**
 * Dialogs can be nested. This example opens a Date Picker from within a Dialog.
 */
export default class SettingDialog extends React.Component {
    constructor (props, context){
        super(props, context);
        this.state = {
            open: false
        }
    }
    getChildContext() {
        return { muiTheme: getMuiTheme(baseTheme) };
    }

    handleToggle ()  {
        this.setState({open: !this.state.open});
    }
    
    _onchange() {
        
    }
    render() {
        const actions = [
            <FlatButton
                label="Ok"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleToggle}
            />,
        ];

        return (
            <div>
                <RaisedButton label="设置" onMouseDown={this.handleToggle.bind(this)} />
                <Dialog
                    title="设置新的头像"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleToggle.bind(this)}
                >
                 <TextField
                    hintText="头像链接"
                    errorText="格式错误"
                    floatingLabelText="Floating Label Text"
                    /><br />
                </Dialog>
            </div>
        );
    }
}

SettingDialog.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired
};
