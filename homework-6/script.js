
/////Homework 1 //////
// let user = {};
// user.name = 'John';
// user.surname = 'Smith';
// user.name = 'Pete';
// delete user.name;
// console.log(user);


/////// Homework 2 ///////////
// let schedule = {};
// function isEmpty(obj) {
//   for (let key in obj) {
//     return false;
//   }
//   return true;
// }
// alert(isEmpty(schedule)); 
// schedule["8:30"] = "get up";
// alert(isEmpty(schedule));

//////// Homework 3 /////////
let salaries = { John: 100, Ann: 160, Pete: 130 };
let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}
console.log(sum);