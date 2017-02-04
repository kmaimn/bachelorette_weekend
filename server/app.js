var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/public', express.static(path.join(__dirname, './public')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.set('port', 5000);

app.listen(process.env.PORT || app.get('port'), function () {
  console.log('Listening on port: ', app.get('port'));
});