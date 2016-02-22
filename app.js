var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var ECT = require('ect');
var ectRenderer = ECT({ watch: true, root: __dirname + '/views', ext : '.ect' });
var express = require('express');
var favicon = require('serve-favicon');
var logger = require('morgan');
var moment = require('moment');
var path = require('path');

var routes = require('./routes/index')
var app = express();

app.set('view engine', 'ect');
app.engine('ect', ectRenderer.render);
app.locals.moment = moment;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', routes);

app.listen(8080);
console.log('8080 is the magic port');

