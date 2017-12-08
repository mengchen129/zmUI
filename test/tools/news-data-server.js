var express = require('express');
var app = express();

var list = require('./news-data');

const PAGE_SIZE = 20;

app.get('/list', function (req, res) {
    var p = req.query.p || 1;
    var start = (p - 1) * PAGE_SIZE;
    var end = start + PAGE_SIZE;
    var subList = list.slice(start, end);

    res.jsonp({
        list: subList,
        hasMore: end < list.length
    });
});

app.listen(8090, function () {
    console.log('Http Server started.');
});