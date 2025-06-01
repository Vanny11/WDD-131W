// arrays.js

// Activity 1 - Convert array to HTML list
const steps = ["one", "two", "three"];
function listTemplate(step) {
  return `<li>${step}</li>`;
}
const stepsHtml = steps.map(listTemplate);
document.querySelector("#myList").innerHTML = stepsHtml.join(''); // Correct: joins without commas

// Activity 2 - Convert letter grades to points
const grades = ["A", "B", "C"];
function changeLetterGrade(grade) {
  let points = 0;
  if (grade === "A") {
    points = 4;
  } else if (grade === "B") {
    points = 3;
  } else if (grade === "C") {
    points = 2;
  }
  return points;
}
const gradePoints = grades.map(changeLetterGrade); // [4, 3, 2]

// Activity 3 - Reduce to calculate GPA
const pointsTotal = gradePoints.reduce((total, item) => total + item);
const gpa = pointsTotal / gradePoints.length;
console.log("GPA:", gpa); // Optional: log the GPA

// Activity 4 - Filter fruits with names shorter than 6 characters
const fruits = ["watermelon", "peach", "apple", "tomato", "grape"];
const shortFruits = fruits.filter(fruit => fruit.length < 6);
console.log("Short fruits:", shortFruits); // ["peach", "apple", "grape"]

// Activity 5 - indexOf usage
const numbers = ["12", "34", "21", "54"];
const position = numbers.indexOf("21");
console.log("Index of '21':", position); // 2
// Vanessa Lemus