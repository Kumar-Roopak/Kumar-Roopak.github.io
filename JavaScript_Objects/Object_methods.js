//So we learned in the object creation function that an object can hold different types of data, So including a raise, and even other objects, but we can also even attach functions to objects. And these functions are then called methods.



//Objects and methods


var roopak = {
    firstName: 'Roopak',
    lastName: 'Kumar',
    birthYear: 1992,
    family: ['brooke', 'david', 'sara', 'fiona'],
    job: 'student',
    isMarried: false,
    calcAge: function() {
        this.age = 2018 - this.birthYear;
    }
};

roopak.calcAge();
console.log(roopak);