const express = require('express');
const home = express.Router();
home.get('/index', (req, res) => {
    res.end('欢迎！！！')
});
module.exports.home = home;