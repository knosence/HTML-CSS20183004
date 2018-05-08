const callback = function(){
    console.log("1000 milliseconds have passed!");
    return 10001;
}

console.log(typeof(callback));
console.log(`return val of callback`, callback());
setTimeout(callback, 1000);
setTimeout(callback, 1000);

function a(x){
    return function (y) {
        console.log(x+y);
    }
}

a(2)(3);
