var express = require('express'),
bodyParser = require('body-parser'),
app = express();


var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({	extended: true })); // support encoded bodies

require('./routes/routes.js')(app);


app.set('views', __dirname + './../app/');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use(express.static(__dirname + './../app/'));
app.use(express.static(__dirname + './../bower_components'));



var port = process.env.PORT || 3000;

app.listen(port);

console.log('Server listening on port %s .....', port);
