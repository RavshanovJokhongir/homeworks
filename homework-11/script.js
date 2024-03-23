/////////// homework 1 /////////////
// const findSum = (n) => {
//     return (n * (n + 1)) / 2;
//   }
  
//   console.log(findSum(5)); 
//   console.log(findSum(6));


/////////// homework 2 ////////////////
let obj = {
    age: 100,
    child: {
        age: 50,
        child: {
            age: 20
        }
    }
}
const sumAges = (obj) => {
    let sum = 0;
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            sum += sumAges(obj[key]); 
        } else if (key === 'age') {
            sum += obj[key];
        }
    }
    return sum;
};
console.log(sumAges(obj));