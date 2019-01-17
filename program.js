// let pic = document.getElementById("pic");
// console.log(pic.src);
// ----------------------------- --- --------------------------------

// import {hello} from "./import_me.mjs";

// let val = hello();

// document.writeln('Hello, world!');

// console.log('Program start');

// ----------------------------- Promises --------------------------------
// let p1 = new Promise( (resolve, reject) => {

//     setTimeout(() => resolve("p1"), 900);
    
// });

// let p2 = new Promise( (resolve, reject) =>{
//     setTimeout(() => resolve("p2"), 200);
// });

// // let start = Date.now();
// // while (Date.now() < start + 2000) {}

// p1.then(value => {
//     console.log(value)
// });

// p2.then(value => {
//     console.log(value)
// });

// ----------------------------- --- --------------------------------

// const Person = function(name) {
//     this.name = name;
//     let age = 20;
//     this.greet = function() {
//         console.log(`name: ${this.name}, age: ${age}`);
//     };
// }

// let joe = new Person(`Joe`);
// joe.greet();
// console.log(joe.name);
// console.log(joe.age);

// const box = {
//     locked: true,
//     unlock() { this.locked = false; console.log("Unlocked");},
//     lock() { this.locked = true; console.log("locked"); },
//     _content: ["secrets"],
//     notHidden: [],
//     get content() {
//         if (this.locked) throw new Error("Locked!");
//         return this._content;
//     }
// };

// function withBoxUnlocked( func ) {
//     box.unlock();

//     try {
//         func();

//     } finally {
//         box.lock();

//     }

// }

// // withBoxUnlocked( () => box.content.push("gold piece") );

// try {
//     withBoxUnlocked( 
//         () => { throw new Error("Pirates on the horizon! Abort!"); }
//     );
// } catch (e) {
//     console.log("Error raised:", e);

// }

// console.log(box.locked);

// try {
//     withBoxUnlocked()
// }

// ----------------------------- --- --------------------------------
// class Group {
//     constructor() {
//         this.group = [];
//     }

//     add(value) {
//         if (!this.has(value)) {
//             this.group.push(value);

//         } else {
//             console.log("Already in group");
//         }

        
//     }

//     delete(value) {
//         let idx = this.group.indexOf(value);

//         if (idx != -1) {
//             this.group.splice(idx, 1);

//         } else {
//             console.log(`${value} is not in the group`);
//         }
//     }

//     has(value) {
//         return (this.group.indexOf(value) != -1);
//     }

//     static from(objects) {

//         let group = new Group();

//         for (let object of objects) {
            
//             group.add(object);
//         }

//         return group;
//     }
// }

// let group = Group.from([10, 20]);
// console.log("---");

// console.log(
//     group.has(10),
//     group.has(30),
//     group.add(10),
//     group.delete(10),
//     group.has(10)
// )



// print(
//     group.has(10),
//     group.has("10")
// )

// group.add("10");

// print( group.has(10) );

// group.delete(10);


// print( group.has('10') );


// ----------------------------- --- --------------------------------








// function print(...objs) {
//     console.log(objs);
//     for (let obj of objs) {
//         console.log(obj);
//     }
// }

// class Vec {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }

//     plus(other) {
//         return new Vec(this.x + other.x, this.y + other.y);
//     }

//     minus(other) {
//         return new Vec(this.x - other.x, this.y - other.y);
//     }

//     get length() {
//         return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
//     }

//     set length(value) {
//         this.x = 5;
//         this.y = 12;
//         console.log(`value: ${value}`);
//         console.log("x = 5, y = 12");
//     }
// }

// console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// console.log(new Vec(1, 2).minus(new Vec(2, 3)));

// console.log(new Vec(3, 4).length);

// let vec = new Vec(3, 4);
// console.log("Length", vec.length);
// vec.length = [[6, 7], ["wfq"]];
// console.log("New length", vec.length);

// class Rabbit {
//     constructor(type) {
//         this.type = type;
//     }

//     speak(line) {
//         console.log(`The ${this.type} rabbit says ${line}`);
//     }
// }

// let killerRabbit = new Rabbit("Killer");
// let blackRabbit = new Rabbit("Black");

// killerRabbit.speak("I'll kill you");
// blackRabbit.speak("Hi Everybody");

// killerRabbit.full = "No";

// console.log(killerRabbit.full);

// let obj = {};

// let a = "abc";

// obj[a] = "property a";

// console.log(obj[a]);
// console.log(obj.a);
// console.log(obj["a"]);
// console.log(obj["abc"]);

// console.log("-------");

// obj = {a: "propert a obj 2"};

// console.log(obj[a]);
// console.log(obj.a);
// console.log(obj["a"]);
// console.log(obj["abc"]);

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