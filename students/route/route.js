// 引入router模块
const getRouter = require('router');
// 获取路由对象
const router = getRouter();
const Student = require('../model/user');
// 引入模板引擎
const template = require('art-template');
// 引入querystring
const querystring = require('querystring');

router.get('/add', (req, res) => {
    let html = template('index.art', {});
    res.end(html)
})
// 呈现学生档案信息列表页面
router.get('/list', async (req, res) => {
    // 查询学生信息
    let students = await Student.find();
    let list = template('list.art', {
        students: students
    });
    res.end(list);
})

// 实现学生信息添加功能
router.post('/add', (req, res) => {
    // 接受post请求参数
    let formData = '';
    req.on('data', param => {
        formData += param;
    });
    req.on('end', async () => {

        await Student.create(querystring.parse(formData))
        res.writeHead(301, {
            Location: '/list'
        })
        res.end();
    })
})

module.exports.router = router;