const http = require("http");


const Server = http.createServer(function (req, res) {
    if(req.url === "/getsecretdata"){
        res.end("there is no data");
    }
   else{
    res.end("hello");
}});

Server.listen(3000);