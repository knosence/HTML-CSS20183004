$(document).ready(()=>{
   console.log("what are YOUUU doing")
    $('#weather-form').submit((event)=>{
        event.preventDefault();
        // console.log("FORM SUBMITTED!!")

        const userCity = $('#city').val();

        // console.log(userCity);

        const weatherUrl= `https://api.openweathermap.org/data/2.5/weather?q=${userCity}&units=imperial&appid=${apiKey}`
        console.log("url",weatherUrl)
    })
});