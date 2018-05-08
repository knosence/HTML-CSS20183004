function caseConverter(str, convertionType) {

    let convertedStr = ``;
    if (convertionType === `camelCase`) {
        let strArray = str.split(`_`);
        convertedStr += strArray[0];
        for (let i = 1; i < strArray.length; i++) {
            convertedStr += strArray[i].replace(strArray[i][0], strArray[i][0].toUpperCase())
        }
    } else if (convertionType === `snake_case`) {
        let strArray = str.split(/(?=[A-Z])/);
        convertedStr += strArray[0];
        for (let i = 1; i < strArray.length; i++) {
            convertedStr += `_`;
            convertedStr += strArray[i].replace(strArray[i][0], strArray[i][0].toLowerCase())
        }
    } else {
        return `Invalid Entry`;
    }
    return convertedStr;
}

console.log(caseConverter(`dog_house_hello`, `camelCase`));
console.log(caseConverter(`dogHouseHello`, `snake_case`));