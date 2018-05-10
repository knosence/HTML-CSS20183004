// we have access to the express module, BECAUSE
// we used npm to install it. Unlike http and fs,
// its NOT part of core.It's an extension

const express = require('express');

const app = express();

//app.get takes 2 args:
//1. the endpoint with verb
//2. callback to run upon request for that route
app.get('/',(req,res)=>{
   res.send('hello, world!');
});

app.listen(3000);
console.log('app is listening on port 3000 via nodemon');



