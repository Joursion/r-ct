
// use routers
'use strict';

var Message = require('../lib/message.js');
var User =  require('../lib/user.js');
var Token = require('../lib/token');
var uuid = require('node-uuid');
var md5 = require('./src/md5');
var emoji = require('emoji');

module.exports = function (app, router) {

    router.get('/', function *() {
        this.status = 200;
        this.body = "Dsa";
    });

    router.post('/api/login', function *(){
        var data = this.request.body;
        console.log(data);
        var UserInfo = yield User.getUserByName(data.username);
        console.log(UserInfo);

        if(! UserInfo || (UserInfo.password !== data.password)) {
            this.status = 200;
            this.redirect('back');
            this.body = {error: "用户名或者密码错误"};
        } else {
            var token = md5.md5(UserInfo.username) + uuid.v4();
            console.log(token);

            yield Token.addToken({
                token: token,
                username: UserInfo.username
            });

            this.redirect('back');
            this.status = 200;
            this.body = {
                success: "ok",
                username: UserInfo.username,
                avatar: UserInfo.avatar,
                token: token
            };
        }
    });
    
    router.post('/api/register', function *() {
        var data = this.request.body;
        console.log(data);
        var UserExist = yield User.getUserByName(data.username);
        console.log(UserExist);
        if (UserExist) {
            this.redirect('back');
            this.status = 200;
            this.body = {error: "该用户名已经存在"};
        } else {
            yield User.addUser(data);
            this.redirect('back');
            this.status = 200;
            this.body = {success:"登陆成功"};
        }

    });
    
    router.post('/api/message',function *() {
        var data = this.request.body;
        console.log(data);
        yield Message.addMessage(data);
        this.redirect('back');
        this.status = 200;
        this.body = {
            success: true,
            message: data
        }
    });

    router.get('/api/message', function *() {
        var messageContent = yield Message.getMessage();
        //console.log(emoji.unifiedToHTML('jintian wo henbma' + messageContent));
       // var emojied = emoji.unifiedToHTML(messageContent.content);
        var getedData = {
             "success": "true",
             "data": messageContent
        };
        this.status = 200;
        this.type = 'application/json';
        this.body = getedData ;
    });

    router.post('/regcheck', function *() {
        var user = this.request.body;
        console.log(user);
        var isExist = yield User.findUserByName(user.username);
        var res = isExist ? "用户名已经被注册" : "ok";
        this.redirect('back');
        this.status = 200;
        this.body = res;
    });

    router.post('/api/token', function *() {
        var data = this.request.body;
        console.log(data);
        let time = Date.now();
        var getToken = yield Token.getTokenByToken(data.token);
        console.log('getToken',getToken);
        if (getToken.create_at - time > 10000000) {
            yield Token.delete(data);
            this.redirect('back');
            this.status = 200;
            this.body = {error: "error"};
        } else {
            var userInfo = yield User.getUserByName(getToken.username);
            this.redirect('back');
            this.status = 200;
            this.body = {
                ok: "ok",
                user: userInfo
            }
        }
    });
    
    router.post('/logout',function *(){
        
    });


    app
        .use(router.routes())
        .use(router.allowedMethods());
};
