var express = require('express');
var app = express();
//app.use(express.static('dist'));
app.use(express.static(__dirname + '/build'));

app.get('/', function (req, res) {
    res.sendFile('index.html');
});
var port = process.env.PORT || 9000;
var server = app.listen(port, function () {
    var host = server.address().address;
    console.log('StirlingWaiteCom app listening at: ', port);
});