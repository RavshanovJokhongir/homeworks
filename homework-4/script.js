/* string 1st homework */
// let str = '    FoziL       ';
// let ending = str.trim().endsWith('L');
// console.log(ending); //output:true, else:false
///////////////////////////////////////////////////////////////////////

/* string 2nd homework */
// let str1 = 'Web';
// let str2 = 'Brain';
// let replacingStr1 = str1.replace('Web', 'Brain');
// let replacingStr2 = str2.replace('Brain', 'Web');
// console.log(replacingStr1);
// console.log(replacingStr2);
////////////////////////////////////////////////////////////////////////

/* string 5th homework */
let str = 'webBrain';
let repeating = (str + ' ').repeat(10);
let replacing = repeating.replace(/webBrain/g, 'ITBrain');
console.log(repeating);
console.log(replacing);
