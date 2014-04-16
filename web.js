var express = require('express');
var app = express();
var server = require('http').createServer(app);
app.use(express.static(__dirname + '/public' ));


var port = Number(process.env.PORT || 5000);
server.listen(port, function(){
    console.log("listening on " + port);
});

app.get("*", function(request, response){
    response.sendfile(__dirname + 'public/index.html')
    console.log("page loaded");
});