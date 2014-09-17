var express = require('express');
var app = express();
var server = require('http').createServer(app);
app.use(express.static(__dirname + '/public' ));

var port = Number(process.env.PORT || 5000);
server.listen(port, function(){
    console.log("listening on " + port);
});
//app.get commit
app.get("/resume", function(request, response){
  response.sendfile('public/resume.html');
  console.log("resume page loaded");
});

app.get("/logo", function(request, response){
  response.sendFile('public/img/logo.png');
  console.log('logo requested');
});
//catch all
app.get("*", function(request, response){
    response.sendfile('public/index.html');
    console.log("page loaded");
});
