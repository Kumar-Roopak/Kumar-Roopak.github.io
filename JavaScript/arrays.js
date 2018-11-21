// Initialize new array
var names = ['Roopak', 'Brooke', 'David'];
var years = new Array(1992, 1993, 1992);

console.log(names[2]);
console.log(names.length);


// Mutate array data
names[1] = 'Sarah';
names[names.length] = 'Ramesh';
console.log(names);

// Different data types in array
var roopak = ['Roopak', 'Kumar', 1992, 'student', true];

roopak.push('blue');
roopak.unshift('Mr.');
console.log(roopak);

roopak.pop();
roopak.pop();
roopak.shift();
console.log(roopak);
