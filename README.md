## r-ch

和r-chat基本类似. r-ch 使用前后端分离.
前端 koa + react.js
后端 koa

## 使用:
1. 克隆项目 git clone https://github.com/Joursion/r-ct.git
2. 进入项目目录 cd r-ct
3. 分别在front/server中 , 安装依赖包 npm install
4. 分别运行前后端 

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

    
    




