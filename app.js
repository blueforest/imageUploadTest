

/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var mutilpart = require('connect-multiparty');
var uploader = require('express-fileuploader');
var multer = require('multer');
var fs = require('fs');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.urlencoded());
app.use(express.json());
//app.use(express.bodyParser({ uploadDir: "./public/upload" })); 
app.use(multer({dest:__dirname + '/public/upload'}));
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.post('/upload', routes.upload);

app.post('/file-upload', function(req, res, next) {
 // console.log(req.body);
 
  //var files = JSON.parse(req.files);
  // console.log(req.files);
   res.send(files)
});

//app.use('/upload', mutilpart());

// uploader.use(new uploader.LocalStrategy({
//   uploadPath: './public/upload',
//   domain: 'http://localhost:3000'
// }));

// app.post('/upload', function(req, res, next) {
//   uploader.upload('local', req.files['images'], function(err, files) {
//     if (err) {
//       return next(err);
//     }
//     res.send(JSON.stringify(files));
//   });
// });

app.get('/users', user.list);
app.get('/crossdomain.xml', function(req, res){
	res.send(fs.readFileSync('crossdomain.xml').toString());
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
