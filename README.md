## r-ct

和 <a href="https://github.com/Joursion/r-chat">r-chat</a>基本类似. r-ct 使用前后端分离.
前端 koa + react.js
后端 koa

## 使用:
1. 克隆项目 git clone https://github.com/Joursion/r-ct.git
2. 进入项目目录 cd r-ct
3. 分别在front/server中 , 安装依赖包 npm install
4. 在front/src/javascript/default.js ,server/config.js 修改相关配置
5. 分别运行前后端 

## API

- GET /api/message

无参数 返回格式``` {"success":"true", "data":[{"content":"", "_id":"",...}]} ```

- POST /api/message

    user:{username:String, avatar: String},
    time: Date,
    content: String
    
返回数据: {"success":"true", "data":req.data}

- POST /api/login

   user: String,
   password: String
   
   或者 
   token: String
   
   返回用户数据.
   
## 可能会遇到的问题

- addComponentAsRefTo(...): Only a ReactOwner can have refs. You might be adding 
  a ref to a component that was not created inside a component\'s render method, or you have multiple copies of React loaded.
  
1. 解决方法 <a href="https://gist.github.com/jimfb/4faa6cbfb1ef476bd105"> 详见</a>
2. 后来我在 <a href="https://github.com/callemall/material-ui/issues/2818"> 这里 </a> 又看到,
   删掉   node_modules/material-ui/node_modules/react 感觉有点坑啊...!!

- Error during WebSocket handshake: Unexpected response code: 400

在nginx 中添加如下:  具体问题(https://github.com/socketio/socket.io/issues/1942)

```
proxy_http_version 1.1;
proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection "upgrade";
proxy_set_header Host $host;
```

## 项目目录
```
├── front  
│   ├── dest
│   │   └── r-chat.css
│   ├── gulpfile.js
│   ├── package.json
│   ├── README.md
│   └── src
│       ├── app.js
│       ├── bundle.js
│       ├── bundle.js.map
│       ├── css
│       │   └── r-chat.css
│       ├── gulpfile.js
│       ├── img
│       │   ├── favicon1.ico
│       │   └── favicon.ico
│       ├── index.html
│       ├── javascript
│       │   ├── action.js
│       │   ├── components
│       │   │   ├── avatar.jsx
│       │   │   ├── dialog.jsx
│       │   │   ├── footer.jsx
│       │   │   ├── header.jsx
│       │   │   ├── inputBox.jsx
│       │   │   ├── loginBox.jsx
│       │   │   ├── messageBox.jsx
│       │   │   ├── message.jsx
│       │   │   ├── regBox.jsx
│       │   │   ├── setting.jsx
│       │   │   └── user.jsx
│       │   ├── default.js
│       │   ├── main.jsx
│       │   ├── pages
│       │   │   ├── about.jsx
│       │   │   ├── api.jsx
│       │   │   ├── index.jsx
│       │   │   ├── login.jsx
│       │   │   ├── register.jsx
│       │   │   └── test.jsx
│       │   ├── reducer.js
│       │   └── store.js
│       ├── setting.js
│       └── webpack.config.js
├── npm-debug.log
├── README.md
└── server
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