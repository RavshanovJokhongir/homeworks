//////// Homework 1 ///////////////////////////
// let obj={
//         id:1,
//         name:"WebBrain"
//     }
// let keys = Object.keys(obj);
// console.log(keys); 

//////// Homework 2 ///////////////////////////
let obj = {
    id: 1,
    name: "WebBrain"
};

let Value = 1;
let Key = null;

for (let key in obj) {
    if (obj[key] === Value) {
        Key = key;
        break; 
    }
}

console.log(Key);