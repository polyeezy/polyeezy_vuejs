var connect = require('connect');
var serveStatic = require('serve-static');

connect().use(serveStatic(__dirname + '/../app/dist')).listen(8080, function(){

    console.log(__dirname + '../app/dist');
    console.log('Server running on 8080...');
});