// Map in es6 was made fo  java programmers.
// its just a key-value pair. It is FAR more protected than a regular object?
// it is an iterable

const myContactsObj = {
    "Rob" : "555-1234",
    "Jim" : "555-9876"
}

for(key in myContactsObj){
    console.log(key)
}

let myContacts = new Map();
console.log(myContacts);

myContacts.set(`Rob`, `555-1234`);
myContacts.set(`jim`, 555-9876);
console.log(myContacts);
const rob = myContacts.get(`Rob`);

let aFunc = function () {
    console.log(`Hahaha, `)
}

