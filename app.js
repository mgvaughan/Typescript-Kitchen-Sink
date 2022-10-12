"use strict";
var firstName = 'Michael'; // variable for name
var stateCount = '50'; // constant that contains the number of states in the U.S.
var sum = 5 + 4; // variable for sum of 5 + 4
function sayHello() {
    return alert('Hello World!');
}
sayHello();
function checkAge(name, age) {
    if (age < 21) {
        return alert("Sorry " + name + ", you aren't old enough to view this page!");
    }
}
;
checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);
var veg = ["carrots", "squash", "peas", "green beans"];
for (var i = 0; i < veg.length; i++) {
    console.log(veg[i]);
}
;
var pet = {
    name: 'Sophie',
    breed: 'Maltipoo'
};
console.log(pet.name, pet.breed);
var people = [
    {
        name: "Alex",
        age: 18
    },
    {
        name: "Adam",
        age: 19
    },
    {
        name: "Andrew",
        age: 20
    },
    {
        name: "Frank",
        age: 22
    },
    {
        name: "Thomas",
        age: 23
    },
];
for (var i = 0; i < people.length; i++) {
    checkAge(people[i].name, people[i].age);
}
function getLength(argument) {
    return argument.length;
}
var len = getLength('Hello World');
var rem = len % 2;
if (rem < 1) {
    console.log('The world is nice and even!');
}
else {
    console.log('The world is an odd place!');
}
