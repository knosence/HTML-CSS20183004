// http is part of core. include it so we can make a sever.
const http = require('http');

const fs = require('fs');

const port = 3000;

// function renderHomePage(req, res) {
function renderHomePage() {
    // res.writeHead(200, {
    //     'content-type': 'text/html'
    // });
    //
    // res.end('<h1>Your page has loaded</h1>');

    const theHTMLtoGet = fs.readFileSync('./homepage.html');

    return theHTMLtoGet;
}

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200,{'content-type':'text/html'});
        res.end(renderHomePage());
    } else {
        res.end('Page not found!');
    }
});

server.listen(8080);
console.log(`Server is listening on port 3000...`);


