function sayHello(person: string): string {
  return "Hello, " + person;
}
var user = "Super Student";

// add certs function
// function addCerts(...args: any[]): any{
//     for (let i = 0; i < args.length; i++){
//         this.certs.push(args[i]);
//     }
//     return this.certs;
// console.log(this.certs);
// }

// ? = not required
interface EmployeeOptions {
  firstName: string;
  lastName: string;
  age?: number;
  phoneNumber?: string;
  state?: string;
  zipCode?: string;
  occupation?: string;
  hourlyWage?: number;
}
// class
class Employee implements EmployeeOptions {
  public firstName: string;
  public lastName: string;
  public age: number;
  public phoneNumber: string;
  public state: string;
  public zipCode: string;
  public occupation: string;
  public hourlyWage: number;
  //   array thats taking strings
  public certifications: string[] = [];

  //   constructor
  constructor(
    firstName: string,
    lastName: string,
    age?: number,
    phoneNumber?: string,
    state?: string,
    zipCode?: string,
    occupation?: string,
    hourlyWage?: number
    // degrees: string
  ) {
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

  getFullName(): string {
    return this.firstName + " " + this.lastName;
  }

  getNameAndPhoneNumber(): string {
    return this.getFullName() + " " + this.phoneNumber;
  }

  getNameAndLocation(): string {
    return this.getFullName() + " " + this.state + " " + this.zipCode;
  }

  getNameAndOccupation(): string {
    return this.getFullName() + " " + this.occupation;
  }

  getHourlyWage(hoursWorked?: number): number {
    //   let hourlyWage = 25;
    if (hoursWorked) {
      return this.hourlyWage * hoursWorked;
    } else {
      return this.hourlyWage * 40;
    }
    // return hourlyWage * hoursWorked;
  }

  //   ... add unlimited number of parameters
  addCerts(...certifications: string[]) {
    this.certifications.push(...certifications);

    for (var i = 0; i < certifications.length; i++) {
      console.log(certifications[i]);
    }
    return "Certifications: " + this.certifications.join(", ");
  }

  //   setCerts(...certs: string[]){
  //       this.certs = certs;
  //       addCerts();
  //   }

  //   getCerts(); string[]{
  //       return this.certs;
  //   }

  static addEmployees(myObject: EmployeeOptions): Employee {
    return new Employee(myObject.firstName, myObject.lastName);
  }
}

// EMPLOYEES
let andrewYerger = new Employee(
  "Andrew",
  "Yerger",
  30,
  "423-434-3445",
  "NC",
  "28205",
  "Developer",
  25
);

let piperBooth = new Employee(
  "Piper",
  "Booth",
  26,
  "423-444-3345",
  "NC",
  "28205",
  "Nurse",
  25
);

let tinaYerger = new Employee(
  "Tina",
  "Yerger",
  55,
  "423-434-3445",
  "MS",
  "39110",
  "Dentist",
  25
);

let johnnyYerger = new Employee(
  "Johnny",
  "Yerger",
  55,
  "423-434-5555",
  "MS",
  "39110",
  "HR",
  25
);

// print

document.getElementById("para").innerHTML = sayHello(user);

document.getElementById(
  "id-2"
).innerHTML = andrewYerger.getNameAndPhoneNumber();

document.getElementById("id-3").innerHTML = piperBooth.getFullName();

document.getElementById("id-4").innerHTML = tinaYerger.getNameAndLocation();

document.getElementById(
  "id-5"
).innerHTML = johnnyYerger.getHourlyWage().toString();
// innerHTML only takes string

document.getElementById("id-4").innerHTML = tinaYerger.addCerts(
  "blah blah blah"
);

document.getElementById("id-5").innerHTML = Employee.addEmployees({
  firstName: "Andrew",
  lastName: "Yerger",
}).getFullName();

// ari.setCerts("MBA", "CSM", "MCSD");
// document.getElementById("certs").innerHTML = ari
