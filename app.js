const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
//vue目录
app.use(express.static(path.resolve(__dirname, 'public')))

app.get('*', function (req, res) {
    const html = fs.readFileSync(path.resolve(__dirname, 'public/tech-blog/index.html'), 'utf-8')
    res.send(html)
})

module.exports = app;
