
function goToWork(day) {
    if(day <=4){
        console.log("It's a week day, go out and work!");
    }else if(day <=6 && day>=5){
        console.log("Stay home... netflix and chill");
    }
}

function getDaysInMonth(month, year){
    month--;
    let date = new Date(year, month, 1);
    let daysOfMonth = [];

    while(date.getMonth() === month){
        daysOfMonth.push(new Date(date));
        date.setDate(date.getDate() + 1);
    }
    return daysOfMonth;
}


//testing

console.log("=========== Go To Work ==========");
goToWork(4);
goToWork(2);
goToWork(5);

console.log("===========Print the days of a given month==========");
console.log(getDaysInMonth(10, 2018));