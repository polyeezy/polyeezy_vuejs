var express = require('express');
path = require('path'),
    app = express();

app.set('port', 8080);

//tell express that we want to use the www folder
//for our static assets
app.use(express.static(path.join(__dirname, '../app/dist')));
console.log(__dirname, '../app/dist');
// Listen for requests
var server = app.listen(app.get('port'), function () {
    console.log('The server is running on http://localhost:' + app.get('port'));
});