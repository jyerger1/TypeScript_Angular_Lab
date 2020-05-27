function sayHello(person) {
    return "Hello, " + person;
}
var user = "Super Student";
// class
var Employee = /** @class */ (function () {
    //   constructor
    function Employee(firstName, lastName, age, phoneNumber, state, zipCode, occupation, hourlyWage
    // degrees: string
    ) {
        //   array thats taking strings
        this.certifications = [];
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.phoneNumber = phoneNumber;
        this.state = state;
        this.zipCode = zipCode;
        this.occupation = occupation;
        this.hourlyWage = hourlyWage;
        // this.degrees = degrees;
    }
    //   methods
    Employee.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    Employee.prototype.getNameAndPhoneNumber = function () {
        return this.getFullName() + " " + this.phoneNumber;
    };
    Employee.prototype.getNameAndLocation = function () {
        return this.getFullName() + " " + this.state + " " + this.zipCode;
    };
    Employee.prototype.getNameAndOccupation = function () {
        return this.getFullName() + " " + this.occupation;
    };
    Employee.prototype.getHourlyWage = function (hoursWorked) {
        //   let hourlyWage = 25;
        if (hoursWorked) {
            return this.hourlyWage * hoursWorked;
        }
        else {
            return this.hourlyWage * 40;
        }
        // return hourlyWage * hoursWorked;
    };
    //   ... add unlimited number of parameters
    Employee.prototype.addCerts = function () {
        var _a;
        var certifications = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            certifications[_i] = arguments[_i];
        }
        (_a = this.certifications).push.apply(_a, certifications);
        for (var i = 0; i < certifications.length; i++) {
            console.log(certifications[i]);
        }
        return "Certifications: " + this.certifications.join(", ");
    };
    //   setCerts(...certs: string[]){
    //       this.certs = certs;
    //       addCerts();
    //   }
    //   getCerts(); string[]{
    //       return this.certs;
    //   }
    Employee.addEmployees = function (myObject) {
        return new Employee(myObject.firstName, myObject.lastName);
    };
    return Employee;
}());
// EMPLOYEES
var andrewYerger = new Employee("Andrew", "Yerger", 30, "423-434-3445", "NC", "28205", "Developer", 25);
var piperBooth = new Employee("Piper", "Booth", 26, "423-444-3345", "NC", "28205", "Nurse", 25);
var tinaYerger = new Employee("Tina", "Yerger", 55, "423-434-3445", "MS", "39110", "Dentist", 25);
var johnnyYerger = new Employee("Johnny", "Yerger", 55, "423-434-5555", "MS", "39110", "HR", 25);
// print
document.getElementById("para").innerHTML = sayHello(user);
document.getElementById("id-2").innerHTML = andrewYerger.getNameAndPhoneNumber();
document.getElementById("id-3").innerHTML = piperBooth.getFullName();
document.getElementById("id-4").innerHTML = tinaYerger.getNameAndLocation();
document.getElementById("id-5").innerHTML = johnnyYerger.getHourlyWage().toString();
// innerHTML only takes string
document.getElementById("id-4").innerHTML = tinaYerger.addCerts("blah blah blah");
document.getElementById("id-5").innerHTML = Employee.addEmployees({
    firstName: "Andrew",
    lastName: "Yerger"
}).getFullName();
// ari.setCerts("MBA", "CSM", "MCSD");
// document.getElementById("certs").innerHTML = ari
