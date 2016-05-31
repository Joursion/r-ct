/**
 * Created by m on 16-4-21.
 */

module.exports = {
    user: {
        username: "tourist " + Math.ceil(Math.random(0,1)*1000),
        avatar: "https://tse1-mm.cn.bing.net/th?id=OIP.M4b8881c6a7f535a4fd9e131e131ef550o0&w=113&h=110&c=7&rs=1&qlt=90&pid=3.1&rm=2"
    },
    messages: [],
    isLogin: false,
    //apiUrl: "http://localhost:5000/api",
    apiUrl: "http://jours.cc:5000/api",
    error: undefined
};
