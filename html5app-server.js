var express = require('express'),
    app = express();

//initialize static server that will spit out contents of public folder
app.use('/', express.static(__dirname + '/public'));

app.listen(9823); //the express server will start on port 9823
console.log('started');
