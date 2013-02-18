
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

// setup hbs view engine with partials
var fs = require('fs')
  , hbs = require('hbs')
  , partialsDir = __dirname + '/views/partials/';

hbs.registerPartial('apps', fs.readFileSync(partialsDir + 'apps.hbs',
                                            'utf8'));

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'hbs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(require('less-middleware')({ src: __dirname + '/public' }));
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
  
  // test precompile
  // var rawTemplate = '<p>Hello {{name}}</p>{{#if yeah}}<p>Oh {{yeah}}</p>{{/if}}';
  // var compiledTemplate = hbs.handlebars.precompile(rawTemplate);
  // console.log(compiledTemplate);

  // setup hbs file to client js precompiler
  // var hbsPrecompiler = require('handlebars-precompiler');
  // hbsPrecompiler.watchDir(
  //   partialsDir,
  //   __dirname + "/public/js/templates.js",
  //   ['hbs']
  // );
  
});

app.get('/', routes.index);
app.get('/users', user.list);

// intercept request
// app.get('/partials/:file', function(req, res){
//   var file = req.params.file;
//   res.type('text/javascript');
//   res.sendfile(__dirname + '/public/partials/' + file);
// });

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
