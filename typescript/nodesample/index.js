let http = require('http');

let content = function(req, resp){

 resp.end("Good morning Adam ~! -Jessica-" +"\n");

 resp.writeHead(200);

}

let  web = http.createServer(content);

web.listen(8000);