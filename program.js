document.writeln('Hello, world!');

console.log('Program start');

let array = [[1, 2, 3], [4, 5], [6]];

let new_array = array.reduce((total_array, subarray) => total_array.concat(subarray));

console.log(array);
console.log(new_array);

function printLst(lst) {
    curr = lst;

    while(curr != null) {
        console.log(curr.value);
        curr = curr.rest;
    }
}