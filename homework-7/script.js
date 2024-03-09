let obj = {
    name: 'Wba',
    age: 30,
    child : {
        name: 'Wba',
        age: 20,
        child: {
            age: 10
        }
    }
};
function sumAges(obj) {
    let sum = 0;
    for (let key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            sum += sumAges(obj[key]);
        } else if (key === 'age') {
            sum += obj[key];
        }
    }
    return sum;
}

console.log(sumAges(obj)); 
