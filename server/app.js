var Koa = require('koa');
var path = require('path');
var router = require('koa-router')();
var bodyParser = require('koa-bodyparser');
var errorHandler = require('koa-errorhandler');
var serve = require('koa-static');
var logger = require('koa-logger');
var fs = require('fs');
var gzip = require('koa-gzip');
var st = require('./router/app.js');
var cors = require('koa-cors');
var config = require('./config.js');

const app = Koa();
const port = 5000;

app.use(cors());
//app.use(serve(path.join(__dirname, 'public/')));
app.use(serve(__dirname));
app.use(logger());

var server = require('http').createServer(app.callback());

app.use(errorHandler());
app.use(bodyParser());

st(app, router);

app.use(gzip());
// use 的顺序重要！！！！！！！

server.listen(port, function () {
    console.log('Server listening at port %d', port);
});



