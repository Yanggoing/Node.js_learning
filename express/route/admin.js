const express = require('express');
const admin = express.Router();
admin.get('/index', (req, res) => {
    res.end('欢迎！！！')
});
module.exports.admin = admin;