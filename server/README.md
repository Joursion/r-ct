## r-ch 后端

- 使用koa, mongodb

## Install
1. cloen项目 git clone https://github.com/Joursion/r-ct.git
2. 进入目录 cd r-ct/server
3. 安装依赖 npm install
4. 相关配置在 config.js
4. 运行测试 npm start


## 项目目录
```
server
    ├── app.js
    ├── config.js
    ├── lib
    │   ├── message.js
    │   ├── token.js
    │   └── user.js
    ├── models
    │   ├── index.js
    │   ├── message.js
    │   ├── token.js
    │   └── user.js
    ├── package.json
    ├── README.md
    └── router
        ├── app.js
        └── src
            └── md5.js
```

## 可能会遇到的线上部署的问题

- Error during WebSocket handshake: Unexpected response code: 400

在nginx 中添加如下:  具体问题(https://github.com/socketio/socket.io/issues/1942)

```
proxy_http_version 1.1;
proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection "upgrade";
proxy_set_header Host $host;
```
