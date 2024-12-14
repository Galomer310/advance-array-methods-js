// ex1
// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// colors.forEach((color, index) => {
//   console.log(`${index + 1}# choice is ${color}`);
// });

// if (colors.includes("Violet")) {
//   console.log("Yeah");
// } else {
//   console.log("No...");
// }

// ex2
// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// const ordinal = ["th", "st", "nd", "rd"];

// colors.forEach((color, index) => {
//   const suffix = index + 1 <= 3 ? ordinal[index + 1] : ordinal[0];
//   console.log(`${index + 1}${suffix} choice is ${color}.`);
// });

// ex3
// const users = [
//   { firstName: "Bradley", lastName: "Bouley", role: "Full Stack Resident" },
//   { firstName: "Chloe", lastName: "Alnaji", role: "Full Stack Resident" },
//   { firstName: "Jonathan", lastName: "Baughn", role: "Enterprise Instructor" },
//   { firstName: "Michael", lastName: "Herman", role: "Lead Instructor" },
//   { firstName: "Robert", lastName: "Hajek", role: "Full Stack Resident" },
//   { firstName: "Wes", lastName: "Reid", role: "Instructor" },
//   { firstName: "Zach", lastName: "Klabunde", role: "Instructor" },
// ];

// users.map((item, index) => {
//   console.log(`Hello ${item.firstName}`);
// });

// const fullStackResidents = users.filter(
//   (user) => user.role === "Full Stack Resident"
// );
// console.log(fullStackResidents);

// const lastNamesOfFullStackResidents = users
//   .filter((user) => user.role === "Full Stack Resident")
//   .map((user) => user.lastName);
// console.log(lastNamesOfFullStackResidents);

// ex5
// const epic = ["a", "long", "time", "ago", "in a", "galaxy", "far far", "away"];

// const combinedString = epic.reduce(
//   (accumulator, currentValue) => `${accumulator} ${currentValue}`
// );

// console.log(combinedString);

// ex6
// const students = [
//   { name: "Ray", course: "Computer Science", isPassed: true },
//   { name: "Liam", course: "Computer Science", isPassed: false },
//   { name: "Jenner", course: "Information Technology", isPassed: true },
//   { name: "Marco", course: "Robotics", isPassed: true },
//   { name: "Kimberly", course: "Artificial Intelligence", isPassed: false },
//   { name: "Jamie", course: "Big Data", isPassed: false },
// ];

// const passedStudents = students.filter((student) => student.isPassed);
// console.log(passedStudents);

// students
//   .filter((student) => student.isPassed)
//   .forEach((student) => {
//     console.log(
//       `Good job ${student.name}, you passed the course in ${student.course}.`
//     );
//   });
