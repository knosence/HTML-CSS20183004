function reverseString(sentence){
    let charArray = [];
    let l = sentence.length;
    for(let i = l-1; i >= 0; i--){
        charArray.push(sentence[i]);
    }
    return charArray.join('');
}

console.log(reverseString("It is Friday"));

let colors = [
    {
        colorName : "red",
        r: 255,
        b: 0,
        g: 0
    },
    {
        colorName : "pink",
        r: 255,
        b: 182,
        g: 192
    },
    {
        colorName : "brown",
        r: 210,
        b: 105,
        g: 30
    },
    {
        colorName : "cyan",
        r: 0,
        b: 255,
        g: 255
    }

];


function getColors(array) {
    let l = array.length;
    let colors = [];
    for(let i = 0; i < l; i++){
        if(array[i].b > 100 && array[i].g > 100){
            colors.push(array[i].colorName)
        }
    }
    return colors;
}

console.log(getColors(colors));