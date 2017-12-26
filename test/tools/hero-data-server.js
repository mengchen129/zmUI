var express = require('express');
var app = express();

var heroList = require('./hero-data');

app.get('/search', function (req, res) {
    var kw = req.query.kw;
    var resultList = heroList.filter(function(item) {
        return item.name.indexOf(kw) !== -1;
    });

    res.jsonp({
        list: resultList,
    });
});

app.listen(8091, function () {
    console.log('Http Server started.');
});