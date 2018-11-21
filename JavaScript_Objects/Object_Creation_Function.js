//
//imagine that you wanted to access an element of the array, not by its index, but by a specific name. So, basically naming each of the values. And with arrays, of course, you cannot do that, but you can with objects. So in objects, we define key value pairs, which means that each value has a name which is called the key. So, in simple terms, we can use objects to group together different variables that belong together and that have no particular order.


// Objects and Propertires 

// Object literal
var roopak = {
    firstName: 'Roopak',
    lastName: 'Kumar',
    birthYear: 1992,
    family: ['brooke', 'david', 'sara', 'fiona'],
    job: 'student',
    isMarried: false
};
console.log(roopak.firstName);
console.log(roopak['lastName']);
var x = 'birthYear';
console.log(roopak[x]);

roopak.job = 'programmer';
roopak['isMarried'] = true;
console.log(roopak);

// new Ojject syntax
var brooke = new Object();
brooke.firstName = 'Brooke';
brooke.birthYear = 1993;
brooke['lastName'] = 'kumar';
console.log(brooke);
