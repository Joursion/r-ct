/**
 * Created by m on 16-4-1.
 */
'use strict';

//var Static =  require('koa-static');
var Koa = require('koa');
var Send = require('koa-send');
var path = require('path');
var router = require('koa-router')();
var bodyParser = require('koa-bodyparser');
var errorHandler = require('koa-errorhandler');
var serve = require('koa-static');
var logger = require('koa-logger');
var fs = require('fs');
var Io = require('socket.io');
var gzip = require('koa-gzip');

//var st = require('./router/app.js');

const app = Koa();
const port = 4000;

//app.use(serve(path.join(__dirname, 'public/')));
app.use(serve(__dirname));
app.use(logger());

app.use(function *(){
    if(this.path.match(/\./) === null) {
        yield Send(this, 'index.html',{
            maxage: 1000*60*60*24,
            gzip: true
        })
    }
});

var server = require('http').createServer(app.callback());
var io = Io(server);

io.on('connection', function (socket) {
    console.log('is connection');
    socket.on('ison', function (data) {
        console.log(data);
    });
    socket.on('send', function (data) {
        console.log('recieve send', data);
        socket.broadcast.emit('new',{
            group: 'all',
            data : data
        });
        console.log('new',data);
    });
});

app.use(errorHandler());
app.use(bodyParser());

//use router
//st(app, router);

// router.post('/login', function *(){
//     var data = this.request.body;
//     console.log(data);
//     this.redirect('back');
//     this.status = 200;
//     this.body = {dsa:"das",ds:"das"};
// });

// app
//     .use(router.routes())
//     .use(router.allowedMethods());


app.use(gzip());
// use 的顺序重要！！！！！！！

server.listen(port, function () {
    console.log('Server listening at port %d', port);
});



