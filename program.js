document.writeln('Hello, world!');

let array = [0,1,2];
let lst = {value: null};

for (let num of array) {
    if (!lst.hasOwnProperty("value")) {
        lst.value = num;
        lst.rest = null;
    }
}

let lst = {
    value: 0,
    rest: {
        value: 1,
        rest: {
            value: 2,
            rest: null
        }
    }
};

printLst(lst);

function printLst(lst) {

    curr = lst;

    while(curr != null) {
        console.log(curr.value);
        curr = curr.rest;
    }
}