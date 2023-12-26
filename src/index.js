var http = require('http');
var url = require('url');
var fs = require('fs');
var customDateTime = require('./components/custom_datetime')
http.createServer(function (req, res) {
    fs.readFile('../public/index.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        /*var q = url.parse(req.url, true).query;
        var text = q.year +" "+q.month
        res.write("Current Date and Time: " + customDateTime.DateTime() + "\n");
        res.write(req.url);
        res.write(text);*/
        res.write(data);
        res.end();
    });
    /*fs.appendFile('../public/index.html', 'Hello content!', function (err) {
        if (err) throw err;
        console.log('Saved!');
    });*/
    /*fs.open('../public/index.html', 'w', function (err, file) {
        if (err) throw err;
        console.log(file);
        console.log('Saved!');
    });*/
    /*fs.writeFile('../public/test.html', 'Hello content!', function (err) {
        if (err) throw err;
        console.log('Saved!');
    });*/
    /*fs.rename('../public/test.html', '../public/test1.html', function (err) {
        if (err) throw err;
        console.log('File Renamed!');
      });*/
    fs.unlink('../public/test1.html', function (err) {
        if (err) throw err;
        console.log('File deleted!');
    });
}).listen(8080);