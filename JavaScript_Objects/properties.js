function Employee(age)
{
    this.age = age;
}

var employee = new Employee(50);

// Nothing stops you from assigning a value of 1000 to age field
employee.age = 1000;

// the example below is read-only property and age is read/write property. 

function Employee(name, age)
{
    var _name = name;
    var _age = age;

    Object.defineProperty(this, "age",
    {
        get: function () { return _age; },
        set: function (value)
        {
            if (value > 100 || value < 1)
            {
                alert("Invalid age");
            }
            else
            {
                _age = value;
            }
        }
    });

    Object.defineProperty(this, "name",
    {
        get: function () { return _name; }
    });
}

var employee = new Employee("Tom", 55);

// Cannot change the value of name property (read-only)
employee.name = "Tommy";

// Will alert an error - Invalid age
employee.age = 195;
document.write(employee.name + " " + employee.age);