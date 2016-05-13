/**
 * Created by m on 16-4-5.
 */

module.exports = {
    types : {
        SetUser: 'SetUser',
        Message: 'Message',
        SetLogin: 'SetLogin',
        SetUserInfo: 'SetUserInfo',
        PersonalMessage: 'PersonalMessage',
        GroupMessage: 'GroupMessage',
        Error: 'Error'
    },

    setUser: function (user) {
        return {
            type: this.types.SetUser,
            user: user
        };
    },
    
    setUserInfo: function (user) {
        return {
            type: this.types.SetUserInfo,
            user: user
        }
    },

    groupMessage: function (group, message,user,time) {
        return {
            type: this.types.GroupMessage,
            group: group,
            message: message,
            user: user,
            time: time
        }
    },

    personalMessage: function (id, message) {
        return {
            type: this.types.PersonalMessage,
            id: id,
            message: message
        }
    },
    
    setLogin: function (status) {
        return {
            type: this.types.SetLogin,
            status: status
        }
    },
    
    error: function (message) {
        return {
            type: this.types.Error,
            error: message
        }
    }
};