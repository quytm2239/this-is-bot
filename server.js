var rootDir = __dirname;
var express = require('express')
var app = express()
var server = require('http').createServer(app)
var bodyParser = require('body-parser')
var morgan = require('morgan')
var io = require('socket.io').listen(server)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
// redirect to [right] route
app.use(function(req, res, next) {
   if(req.url.substr(-1) == '/' && req.url.length > 1)
       res.redirect(301, req.url.slice(0, -1));
   else
       next();
});

const ORM = require('./model');
app.set('port',require('./config').PORT)

var viewRouter = express.Router()
app.use('/',viewRouter)
app.use(express.static(__dirname + '/view'));
views = require('./view')(app, viewRouter)

// app.use(morgan('dev'))
filelogger = require('./filelogger')(app,morgan)

socketchat = require('./socketchat')(io);

server.listen(process.env.PORT || app.get('port'), function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env)
});
