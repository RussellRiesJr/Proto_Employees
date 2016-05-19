// Empty array to hold employee info
var company = [];
// Create a two-level prototype chain for creating employees in your business. Start off with an Employee function.Then create two other functions named Clinician, and Operations that have Employee on their prototype chain.

function Employee (position) {
  this.position = position;
  this.office = "";
}

// Clinician constructor and related specialty constructors
function Clinician (specialtiy) {
  this.specialtiy = specialtiy;
}
Clinician.prototype = new Employee("Clinician");

function EMT (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
EMT.prototype = new Clinician("EMT");

function Neonatal (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
Neonatal.prototype = new Clinician("neonatal specialist");

// Operations constructor and related specialty constructors
function Operations (specialtiy) {
  this.specialtiy = specialtiy;
}
Operations.prototype = new Employee("Operations");

function Logistics (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
Logistics.prototype = new Operations("logistics coordinator");

function WebDesign (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
WebDesign.prototype = new Operations("web designer");

// Create a two-level prototype chain for creating departments in your business. Start off with a Department function. Then create two other functions named FieldOffice, and Headquarters that have Department on their prototype chain.

function Department (department, location) {
  this.department = department;
}

function FieldOffice (location, name) {
  this.location = location;
  this.name = name;
}
FieldOffice.prototype = new Department("field office", location);

function Headquarters (name) {
  this.location = "Nashville";
  this.name = name;
}
Headquarters.prototype = new Department("headquarters");

// Location variables
var hQ = new Headquarters("company");
var knox = new FieldOffice("Knoxville", "Emergency");
var cleve = new FieldOffice("Cleveland", "Neonatal");

// Employee variables
var russell = new Logistics("Russell", "Ries");
russell.office = hQ;
var keith = new EMT("Keith", "Bradley");
keith.office = knox;
var chase = new Neonatal("Chase", "Ramsey");
chase.office = cleve;
var patrick = new WebDesign("Patrick", "Howell");
patrick.office = hQ;

// Pushing Employee info to the Company array
company.push(russell, keith, chase, patrick);
console.log(company);

var output = document.getElementById("employeeInfo");

for (var i = 0; i < company.length; i++) {
  output.innerHTML += `<p> ${company[i].firstName} ${company[i].lastName} is a ${company[i].specialtiy} at our ${company[i].office.name} ${company[i].office.department} in ${company[i].office.location}.`
}
