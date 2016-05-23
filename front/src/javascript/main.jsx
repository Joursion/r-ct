import React, { Component, ProTypes } from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';
import io from 'socket.io-client';

//Store
const Store = require('./store.js');

//Action
const Action = require('./action.js');

//part  
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';

// pages
import Login from './pages/login.jsx';
import About from './pages/about.jsx';
import Index from './pages/index.jsx';
import Register from './pages/register.jsx';
import Test from './pages/test.jsx';
import Api from './pages/api.jsx';

//default
import DefaultInfo from './default.js';

//css
//import '../css/r-chat.css';

class App extends Component {

    constructor(props, context) {
        super(props, context);
    }

    handleRegister (username, password) {
        fetch(DefaultInfo.apiUrl + "/register",{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        }).then(res => res.json())
        .then(data => {
                console.log(data);
                if(data.error) {
                    alert(data.error);
                    Store.dispatch(Action.error(data.error));
                } else {
                    Store.dispatch(Action.error(undefined));
                    this.props.history.push('/login');
                }
            })
        .catch(e => console.log('handleRegister error',e));
    }

    handleLogout () {
        this.props.history.push('/index');
        window.sessionStorage.removeItem('token');
        Store.dispatch(Action.setLogin("false"));
        Store.dispatch(Action.setUser(undefined));
        
    }

    handleLogin (username, password) {
        fetch(DefaultInfo.apiUrl + "/login",{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        }).then(response => response.json())
        .then(data => {
                console.log(data);
                if (data.error) {
                    Store.dispatch(Action.setLogin(true));
                } else {
                    Store.dispatch(Action.setLogin(true));
                    Store.dispatch(Action.setUser({
                        username: data.username,
                        avatar: data.avatar
                    }));
                    this.props.history.push('/index');

                    window.sessionStorage.setItem('token',data.token);
                    window.localStorage.setItem('username', username);
                    window.localStorage.setItem('password', password);
                }
            })
        .catch(e => console.log('handleLogin error',e));
    }

    handleRegInfoCheck(username, password) {
        fetch(DefaultInfo.apiUrl + "/regcheck",{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        }).then(res => res.text())
        .then(data => {return data.res})
        .catch(e => console.log('handleRegInfoCheck error',e));
    }

//@params 
// Mto:the message to 
    handleSendMessage (message, Mto, user, time) {
        if (Mto == 'all') {
            fetch(DefaultInfo.apiUrl + "/message",{
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    content: message,
                    group: Mto,
                    user: user,
                    time: time
                })
            }).then(res => res.text())
            //.then(data => console.log(data))
            .catch(e => console.log('error',e));

            let socket = io();
            socket.emit('send', {
                message: message,
                user: user,
                time: time
            });

        }
    }

    componentWillMount() {
        let token = window.sessionStorage.getItem('token');
        if (token) {
            fetch(DefaultInfo.apiUrl + "/token",{
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    token: token
                })
            }).then(res => res.json())
                .then(data => {
                    if (data.ok) {
                        Store.dispatch(Action.setLogin("true"));
                        Store.dispatch(Action.setUser(data.user));
                    }
                });

        }
        
        fetch(DefaultInfo.apiUrl + "/message", {
            method: 'GET',
            mode: "cors"
        }).then(res => res.json())
            .then(data => {
                data.data.map(d =>{
                    Store.dispatch(Action.groupMessage(d.group, d.content, d.user, d.time));
                });
            })
           .catch(e => console.log('error', e));


        let socket = io();
        socket.on('new', data => {
           // console.log(data);
            Store.dispatch(Action.groupMessage(data.group, data.data.message, data.data.user, data.data.time));
        });
    }
    
    componentDidMount(){
        
    }

    render() {
        let { message, user , isLogin, error} = this.props;
        message = message || DefaultInfo.messages;
        user = user || DefaultInfo.user;
        isLogin = isLogin || DefaultInfo.isLogin;
        error = error || DefaultInfo.error;
        const props = {
            index: {
                user,
                message,
                isLogin,
                handleSendMessage: this.handleSendMessage.bind(this)
            },
            register: {
                error,
                handleRegister: this.handleRegister.bind(this),
                handleRegInfoCheck: this.handleRegInfoCheck.bind(this)
            },
            login: {
                error,
                handleLogin: this.handleLogin.bind(this)
            }
        };

        return(
            <div className="back">
                <div>
                    <Header handleLogout = { this.handleLogout.bind(this)  }
                            isLogin = { isLogin }
                    />
                    {
                        this.props.children && React.cloneElement(this.props.children, props[this.props.children.props.route.path])
                    }
                    <Footer/>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        message: state.message,
        user: state.user,
        isLogin: state.isLogin,
        error: state.error
    }
}

function mapDispatch(dispatch) {
    return bindActionCreators(Action, dispatch);
}
// const mapStateToProps = state =>{
//     return  {};
// }

 const ConnectedApp = connect(mapStateToProps ,mapDispatch)(App);
//const ConnectedApp = connect()(App);


ReactDOM.render(
    <Provider store = { Store }>
        <Router history = { browserHistory }>
            <Router path = "/" component = { ConnectedApp }>
                <IndexRoute component={ Index }/>

                <Route path = "login" component = { Login } />
                <Route path = "about" component = { About } />
                <Route path = "register" component = { Register } />
                <Route path = "index" component = { Index } />
                <Route path = "test" component = { Test } />
                <Route path = "api" component = { Api } />
            </Router>
        </Router>
    </Provider>
    , document.querySelector("#root")
);
