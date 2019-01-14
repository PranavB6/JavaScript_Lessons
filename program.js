document.writeln('Hello, world!');

console.log('Program start');

let array = [0, 1, 2, 3, 4, 5];
// let lst = {value: null};

// function arrayToList(array) {
//     if (array.length == 1) {
//         let lst = {
//             value: array[0],
//             rest: null
//         };

//         return lst;
//     }

//     let lst = {
//         value: array[0],
//         rest: arrayToList(array.slice(1, ))
//     }

//     return lst;
// }

function arrayToList(array) {

    let tail = null;
    let lst = null;

    for (let i = array.length-1; i >= 0; --i) {
        lst = {
            value: array[i],
            rest: tail
        };

        tail = lst;
    }

    return tail;
}

function listToArray(list) {

    array = [];
    curr = list;

    while (curr != null) {
        array.push(curr.value)
        curr = curr.rest;
    }

    return array;
}


console.log(listToArray(arrayToList(array)));

console.log(array.entries());

// printLst(lst);

function printLst(lst) {

    curr = lst;

    while(curr != null) {
        console.log(curr.value);
        curr = curr.rest;
    }
}