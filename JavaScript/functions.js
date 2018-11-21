function calculateAge(birthYear){
    return 2018 - birthYear;
}

var ageRoopak = calculateAge(1992);
var ageBrooke = calculateAge(1993);
var ageRamesh = calculateAge(1991);
console.log(ageRoopak, ageBrooke, ageRamesh);

function yearUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirment = 65 - age;
    console.log(firstName + ' retires in ' + retirment + 'years.');
}

yearUntilRetirement(1992, 'Roopak');
yearUntilRetirement(1993, 'Brooke');
yearUntilRetirement(1991, 'Ramesh');