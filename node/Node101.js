// at the top, put your required node modules.
//     Require is kind of like the node version of <script>

// http is part of node core! we dont have to install or ask for it
//it comes with node, just require it.
//node is like a mr potato-head man doll. node can run learn!
//it doesnt come with bulk ware.

const http = require(`http`);
// console.log(http);

// fs = file system. fs gives node access to the computer its running on
//part of node. no need to install, it gives node access to the
// file system on this computer. the computer runngng the js file

const fs = require(`fs`);

/*
the createServer takes 2 args:
1.request
2.response
 */
const server = http.createServer((req, res)=>{
    // console.log(`inside createServer`);
    console.log(req.url);

    if(req.url === `/`){
        //writeHead takes 2 minimum of 2 args:
        //1. status code
        //2.
        res.writeHead(200,{'content-type':'text/plain'});
        res.write('<h1>Server responding!</h1>');
        res.end();
    }
});

/*
tell the server we created with the http object to listen for http traffic
(duh) on port 8080;

when a request comes in on port 8080, via http, the callback/anon function in createServer will fire off with the req and res object
 */

server.listen(8585);
