// server.js

var express = require('express')
var app = express()

// 静态 html 页面，需要将当前目录下的所有文件都设置为 static
app.use(express.static(__dirname + '/'));

app.get('/', function (req, res) {
    console.log('start server');
    // sendFile 函数，在有 request 访问时，将当前目录下的 index.html 文件作为 response 返回
    res.sendFile(__dirname + '/index.html');
    console.log('start success');
})

// 监听 8000 端口
app.listen(process.env.PORT || 8000)
