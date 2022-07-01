// Script created based on “Automate The Boring Stuff With Python” by
// Al Sweigart that saves the clock in and clock out hours of all employees.
// Exercise made to learn JS.

let dailyHours = []; // Employee list

function Employee(name) { // Employee constructor function
	this.name = name;
	this.clockedIn = "";
	this.clockedOut = "";
}

// Function that adds a clock in or clock out Date to an Employee object

function clockInAndOut(employee) {
  var now = new Date(); // Gets current time

  for (let i = 0; i < dailyHours.length; i++) { // Goes through a list of all employees
    if (dailyHours[i].hasOwnProperty("name") && dailyHours[i].name === employee) { // Checks if the employee is already registered
      if (dailyHours[i].clockedIn === "") { // Checks if employee already clocked in
		    dailyHours[i].clockedIn = now;
        return dailyHours;
	    } else {
		    dailyHours[i].clockedOut = now;
        return dailyHours;
	      }
    }
  }

  let newEmployee = new Employee(employee); // Creates new employee and add it to the list
  newEmployee.clockedIn = now;
  dailyHours.push(newEmployee);

  return dailyHours;
}
