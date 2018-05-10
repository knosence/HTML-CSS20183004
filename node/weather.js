const http = require('http');

const apikey = 'e312dbeb8840e51f92334498a261ca1d';
const weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=Atlanta&units=imperial&APPID=" + apikey;


//this file, node is the requester, not the responder
// the http.get method takes 2 args:
// 1 where (endpoint)
// 2 code to run when back, with the data as a param

const request = http.get(weatherUrl, (theResponse) => {
    // console.log(theResponse)

    /* .on takes 2 args:
    1. what event to do x on
    2. callack to run, when event happens
     */

    let weatherData = '';
    //data is built in event for response data
    theResponse.on('data', (chuckOfData) => {
        console.log(chuckOfData);
        console.log(`\n`)
        weatherData += chuckOfData;
    })
    //end is a built in event for response data
    theResponse.on('end', () => {
        console.log(JSON.parse(weatherData))
    })

})


