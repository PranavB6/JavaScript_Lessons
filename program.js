document.writeln('Hello, world!');

console.log('Program start');

class Rabbit {
    constructor(type) {
        this.type = type;
    }

    speak(line) {
        console.log(`The ${this.type} rabbit says ${line}`);
    }
}

let killerRabbit = new Rabbit("Killer");
let blackRabbit = new Rabbit("Black");

killerRabbit.speak("I'll kill you");
blackRabbit.speak("Hi Everybody");

killerRabbit.full = "No";

console.log(killerRabbit.full);

let obj = {};

let a = "abc";

obj[a] = "property a";

console.log(obj[a]);
console.log(obj.a);
console.log(obj["a"]);
console.log(obj["abc"]);

console.log("-------");

obj = {a: "propert a obj 2"};

console.log(obj[a]);
console.log(obj.a);
console.log(obj["a"]);
console.log(obj["abc"]);

// let array = [1, 2, 3, 4, 5, 6];

// function every(array, test) {
//     for (let element of array) {
//         if (!test(element))
//             return false;
//     }

//     return true;
// }

// console.log(every(array, n => n < 7));
// console.log(every([], n => n < 10));

// function printLst(lst) {
//     curr = lst;

//     while(curr != null) {
//         console.log(curr.value);
//         curr = curr.rest;
//     }
// }