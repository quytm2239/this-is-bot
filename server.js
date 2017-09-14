var rootDir = __dirname;
var express = require('express')
var app = express()
var server = require('http').createServer(app)
var bodyParser = require('body-parser')
var morgan = require('morgan')
var io = require('socket.io').listen(server)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// app.use(morgan('dev'))
require('./filelogger')(app,morgan)

// redirect to [right] route
app.use(function(req, res, next) {
   if(req.url.substr(-1) == '/' && req.url.length > 1)
       res.redirect(301, req.url.slice(0, -1));
   else
       next();
});

const config = require('./config');
app.set('port',config.PORT);
app.set('utils',require('./utils'))

var apiRouter = express.Router()
app.use(config.api_path,apiRouter)
router = require('./route')(app,apiRouter)

var viewRouter = express.Router()
app.use(config.view_path,viewRouter)
app.use(express.static(__dirname + '/view'));
views = require('./view')(app, viewRouter)

socketchat = require('./socketchat')(io);

server.listen(process.env.PORT || app.get('port'), function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env)
});
