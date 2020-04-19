// 导入模块
require('./model/connect');
require('./route/route');
// 引入http模块
const http = require('http');
// 创建网站服务器
const app = http.createServer();
// 引入path模块
const path = require('path');


// 引入静态资源访问模块
const serveStatic = require('serve-static');
// 实现静态资源访问服务
const serve = serveStatic(path.join(__dirname, 'public'))

// 引入处理日期的第三方模块
const dateformat = require('dateformat');



// 配置模板的根目录
template.defaults.root = path.join(__dirname, 'views');

template.defaults.imports.dateformat = dateformat;


// 访问服务器时处理事件
app.on('request', (req, res) => {
    // 启用路由
    router(req, res, () => {});
    // 启用静态资源访问
    serve(req, res, () => {});
});

app.listen(80);
console.log('服务器启动成功');