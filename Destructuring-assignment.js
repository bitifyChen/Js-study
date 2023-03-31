let array = [1, 2, 3, 4, 5];
let life_arr = [];
let right_arr = [];
[a, b, c, d, e] = array;

console.log(e); //5

[a, ...right_arr] = array;
console.log(right_arr);
