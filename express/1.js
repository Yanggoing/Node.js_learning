// 引入express框架
const express = require('express');

// 创建网站服务器
const app = express();

app.get('/', (req, res) => {
    // send方法
    //  内部会自动检测响应内容的类型
    //  自动设置http状态码
    //  自动设置响应内容类型及编码
    res.send('Hello Express');
})

app.get('/list', (req, res) => {
    res.send({
        name: 'zy',
        age: 20
    })
})
// 监听端口
app.listen(3000);
console.log('网站服务器启动成功');