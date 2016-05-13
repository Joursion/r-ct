//'use strict';

//import { combineReducers } from 'redux';
const Action = require('./action.js');

//let initState = {}

function reducer (state = {}, action) {
    switch (action.type) {
        case Action.types.SetUser: {
            return Object.assign({}, state, {user: action.user});
        }
        case Action.types.SetUserInfo: {
            state.user.username = action.user.username;
            state.user.avatar = action.user.avatar;
            return Object.assign({}, state);
        }
        case Action.types.SetLogin: {
          //  state.isLogin = action.status;
            return Object.assign({}, state, {isLogin: action.status}); 
            //return Object.assign({}, state, {isLogin: action.status});
        }
        case Action.types.GroupMessage:
        {
            if (state.message == null) {
                return Object.assign({},state, {
                    message: [
                        {
                            group: action.group,
                            message: action.message,
                            user: action.user,
                            time: action.time
                        }
                    ]
                })
            }

            return Object.assign({}, state, {
                message: [...state.message, {
                    group: action.group,
                    message: action.message,
                    user: action.user,
                    time: action.time
                }]
            });
           /*return [
               ...state,
               {
                   message: action.message,
                   group: action.group
               }
           ]*/
        }
        default: {
            return state;
        }
    }
}

/*
function messageReducer (state = state.message, action) {
    switch (action.type) {
        case Action.types.GroupMessage : {
            return [...state, action.message];
        }
        default :
            return state;
    }
}

let reducers = combineReducers({
    a: reducer ,
    message: messageReducer
});
*/

module.exports = reducer;