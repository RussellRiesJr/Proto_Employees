// Create a two-level prototype chain for creating employees in your business. Start off with an Employee function.Then create two other functions named Clinician, and Operations that have Employee on their prototype chain.
function Employee (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

function Clinician (firstName, lastName, expertise) {
  Employee.call(this, firstName, lastName);
  this.expertise = expertise;
}
Clinician.prototype = new Employee(firstName, lastName)

function Operations (firstName, lastName, responsibility) {
  Employee.call(this, firstName, lastName);
  this.responsibility = responsibility;
}
Operations.prototype = new Employee(firstName, lastName)
// Create a two-level prototype chain for creating departments in your business. Start off with a Department function. Then create two other functions named FieldOffice, and Headquarters that have Department on their prototype chain.

function Department () {

}

function FieldOffice () {

}
FieldOffice.prototype = new Department();

function Headquarters () {

}
Headquarters.prototype = new Department;
