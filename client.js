// array of employee objects
const employees = [
  {
    name: "Atticus",
    employeeNumber: "2405",
    annualSalary: "47000",
    reviewRating: 3,
  },
  {
    name: "Jem",
    employeeNumber: "62347",
    annualSalary: "63500",
    reviewRating: 4,
  },
  {
    name: "Scout",
    employeeNumber: "6243",
    annualSalary: "74750",
    reviewRating: 5,
  },
  {
    name: "Robert",
    employeeNumber: "26835",
    annualSalary: "66000",
    reviewRating: 1,
  },
  {
    name: "Mayella",
    employeeNumber: "89068",
    annualSalary: "35000",
    reviewRating: 1,
  },
];

console.log("array of employee data: ", employees);

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

// This function will calculate 1 employee's bonus!
//
function calculateIndividualEmployeeBonus(employee) {
  // your logic here
  // debugger;
  // var for bonus tiers
  let threeBonus = 4;
  let fourBonus = 6;
  let fiveBonus = 10;
  // bonus object for storing data
  const bonusObj = {
    name: employee.name,
    bonusPercentage: 0,
    bonus: 0,
    totalCompensation: 0,
  };
  // if statements for checking bonus %
  if (employee.reviewRating < 2) {
    bonusObj.bonusPercentage = 0;
  }
  if (employee.reviewRating === 3) {
    bonusObj.bonusPercentage = 4;
  }
  if (employee.reviewRating === 4) {
    bonusObj.bonusPercentage = 6;
  }
  if (employee.reviewRating === 5) {
    bonusObj.bonusPercentage = 10;
  }
  // if statements for checking if income over $65000
  // if (employee.annualSalary > 65000) {
  //   threeBonus = threeBonus - 1;
  // }
  // if (employee.annualSalary > 65000) {
  //   fourBonus = fourBonus - 1;
  // }
  // if (employee.annualSalary > 65000) {
  //   fiveBonus = fiveBonus - 1;
  // }
  if (employee.annualSalary > 65000) {
    bonusObj.bonusPercentage -= 1;
  }
  bonusObj.bonus = (bonusObj.bonusPercentage / 100) * employee.annualSalary;
  // if (employee.reviewRating === 3) {
  //   bonusObj.bonus = (threeBonus / 100) * employee.annualSalary;
  // } else if (employee.reviewRating === 4) {
  //   bonusObj.bonus = (fourBonus / 100) * employee.annualSalary;
  // } else if (employee.reviewRating === 5) {
  //   bonusObj.bonus = (fiveBonus / 100) * employee.annualSalary;
  // }
  if (employee.employeeNumber.length === 4) {
    bonusObj.bonus = (5 / 100) * employee.annualSalary;
  }
  console.log(threeBonus);

  //78487.5
  bonusObj.totalCompensation = parseInt(employee.annualSalary) + bonusObj.bonus;
  console.log(bonusObj);
  return bonusObj;

  // return new object with bonus results
}
for (let n = 0; n < employees.length; n++)
  calculateIndividualEmployeeBonus(employees[n]);
