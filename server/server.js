var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var path = require('path');

app.use('/static', express.static(path.join(__dirname + '/../client/ui/dist/static/')));

app.get('/', function(req, res){
  res.sendFile('index.html', {'root': '../client/ui/dist'});
});

http.listen(5000, function(){
  console.log('listening on *:5000');
});