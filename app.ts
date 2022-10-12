import { NoSubstitutionTemplateLiteral } from "typescript";

let firstName: string = 'Michael'; // variable for name

const stateCount: string = '50'; // constant that contains the number of states in the U.S.

let sum: number = 5 + 4; // variable for sum of 5 + 4

function sayHello() {
    return alert('Hello World!');
}

sayHello();

function checkAge(name: string, age: number) {
    if(age < 21) {
        return alert("Sorry " + name + ", you aren't old enough to view this page!");
    }   
};

checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);

let veg: string[] = ["carrots", "squash", "peas", "green beans"];

for(let i = 0; i < veg.length; i++) {
    console.log(veg[i]);
};

let pet = {
    name: 'Sophie',
    breed: 'Maltipoo'
};

console.log(pet.name, pet.breed);

let people: IPerson[] = [
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
]

interface IPerson {
    name: string;
    age: number;
}

for(let i = 0; i < people.length; i++) {
    checkAge(people[i].name, people[i].age);
}

function getLength(argument) {
    return argument.length;
}

let len = getLength('Hello World');

let rem = len % 2;
if(rem < 1) {
    console.log('The world is nice and even!');
} else {
    console.log('The world is an odd place!');
}