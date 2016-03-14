// e164-index.js
// ------------------------------------------------------------------
//
// This is the express service that does phoneFormat things.
//
// created: Mon Mar 14 11:13:40 2016
// last saved: <2016-March-14 15:14:08>

var e164lib = require('phoneformat.js');
var app = require('express')();
var port = process.env.PORT || 5950;
var bodyParser = require('body-parser');
var gStatus = {
      version : '20160314-1130'
    };

// ================================================================
// Server interface

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var formatOptions = [
      'formatNumberForMobileDialing',
      'formatE164', 
      'formatInternational',
      'formatLocal'
    ];

var formatPattern =
  '/:format(' + formatOptions.join('|') + ')/:country/:number';

app.get(formatPattern, function(request, response) {
  var output = e164lib[request.params.format](request.params.country, request.params.number);
  response.header('Content-Type', 'application/json')
    .status(200)
    .send({ number: output });
});

app.get('/isValidNumber/:country/:number', function(request, response) {
  var output = e164lib.isValidNumber(request.params.number, request.params.country);
  response.header('Content-Type', 'application/json')
    .status(200)
    .send({ valid: output });
});

app.get('/:example(exampleLandlineNumber|exampleMobileNumber)/:country', function(request, response) {
  var output = e164lib[request.params.example](request.params.country);
  response.header('Content-Type', 'application/json')
    .status(200)
    .send({ example: output });
});

app.get('/cleanPhone/:number', function(request, response) {
  var output = e164lib.cleanPhone(request.params.number);
  response.header('Content-Type', 'application/json')
    .status(200)
    .send({ number: output });
});

app.get('/countryForE164Number/:number', function(request, response) {
  var country = e164lib.countryForE164Number(request.params.number);
  response.header('Content-Type', 'application/json')
    .status(200)
    .send({ country: country });
});

app.get('/countryCodeToName/:code', function(request, response) {
  var output = e164lib.countryCodeToName(request.params.code);
  response.header('Content-Type', 'application/json')
    .status(200)
    .send({ name: output });
});


// default behavior
app.all(/^\/.*/, function(request, response) {
  response.header('Content-Type', 'application/json')
    .status(404)
    .send({ message: "unknown request." });
});

app.listen(port, function() {
  console.log("version " + gStatus.version + " listening on port " + port );
});
