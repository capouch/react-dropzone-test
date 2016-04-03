/*
 * app.js
 * Danilo Zekovic
 * express server
 */

'use strict';
//
var
  http = require('http'),
  express = require('express'),
  multer = require('multer'),
  bodyParser = require('body-parser'),
  MulterImpl  = require('./multerImpl'),
  // methodOverride = require('method-override'),
  // morgan = require('morgan'),
  // fsHandle = require('fs'),

  app = express(),
  router = express.Router(),
  routes = require('./routes/routes.js'),
  server = http.createServer( app );
//------------------------------------------------------

// -- Configure server behavior
app.use( express.static( __dirname + '/' ) );
app.use( bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(methodOverride());
app.use(new MulterImpl({}).init());
    // Turn on verbose logging when needed by uncommenting line below
    // app.use(morgan('combined'));
routes.configRoutes( router, server );
app.use('/', router);

  // --- End server configuration
//-----------------------------------------------------
// --- Start service
server.listen(3333);
console.log(
  'Express server listening on port 3333;'
);
