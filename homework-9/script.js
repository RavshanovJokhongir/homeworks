
//////Homework-1/////////////////////////
// let cars = [
//     { id: 1, year: 1998, engine: 1, name: 'Tico'},
//     { id: 2, year: 2005, engine: 1.2, name: 'Matiz'},
//     { id: 3, year: 2010, engine: 1.6, name: 'Gentra'},
//     { id: 4, year: 2010, engine: 1.5, name: 'Cobalt'},
//     { id: 5, year: 2012, engine: 2, name: 'Malibu'},
//     { id: 6, year: 2000, engine: 1.2, name: 'Damas'},
//     { id: 7, year: 2018, engine: 2.4, name: 'Tracker'}
// ];
//  let filtered = cars.filter(value => value.year < 2000);
//  let filtered1 = cars.filter(value => value.year > 2010);
//  let sorted = cars.sort((a, b) => a.engine - b.engine);
//  let sorted1 = cars.sort((a, b) => a.year - b.year);
//  let sorted2 = cars.sort((a, b) => a.name.localeCompare(b.name));


//  console.log(filtered);
//  console.log(filtered1);
//  console.log(sorted);
//  console.log(sorted1);
//  console.log(sorted2);


////////Homework-2//////////////////////////////
let arr = [38, 23, 14, 25, 20, 55];
console.log(arr.sort((a, b) => a - b).slice(-1));
console.log(arr.sort((a, b) => b - a).slice(-1));