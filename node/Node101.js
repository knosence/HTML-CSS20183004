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

function renderHomePage() {

    const theHTMLtoGet = fs.readFileSync('./homepage.html');

    return theHTMLtoGet;

}

const server = http.createServer((req, res) => {
    // console.log(`inside createServer`);
    console.log(req.url);

    if (req.url === `/`) {
        res.writeHead(200, {'content-type': 'text/html'});
        res.end(renderHomePage());
    } else if (req.url === '/virat.jpg') {
        res.writeHead(200, {'content-type': 'image/jpg'});
        const img = fs.readFileSync('virat.jpg');
        res.end(img);
    } else if (req.url === '/gallery') {
        //writeHead takes 2 minimum of 2 args:
        //1. status code
        //2. header object, which needs to be included
        res.writeHead(200, {'content-type': 'text/plain'});
        const htmlToUse = fs.readFileSync('gallery.html');
        res.end(htmlToUse);
    } else {
        console.log(req.url + `was not found`);
        res.end('Page not found!')
    }
});


/*
tell the server we created with the http object to listen for http traffic
(duh) on port 8080;

when a request comes in on port 8080, via http, the callback/anon function in createServer will fire off with the req and res object
 */

server.listen(3000);
