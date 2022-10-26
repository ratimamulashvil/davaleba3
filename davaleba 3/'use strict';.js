'use strict';
// 1)
// let array = [5, 25, 89, 120, 36];

// array.splice(5,0, 'javascript', 'python');
// array.splice(0,0, 'html', 'css');
// array.splice(0,1);
// array.splice(5,1);
// console.log(array);
// console.log(array.length);

// 2)

// let array = ['ფორთოხალი', 'ბანანი', 'მსხალი'];
// console.log(array.length);
// array.splice(3,0, 'ვაშლი', 'ანანასი');
// array.splice(0,0, 'საზამთრო');
// console.log(array);
// console.log(array.length);
// array.splice(3,0, 'მანგო');
// console.log(array);
// array.splice(0,1);
// array.splice(7,0);
// console.log(array.length);


// 3)

// let array = [12, 25, 3, 6, 8, 14, 7, 23];
// let newArray = array.map((item) => item/3);
// console.log(newArray);

// 4)

// let array = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];

// let filterNumbersArray = array.filter(function(item){
//     return item >= 0;
// })
// console.log(filterNumbersArray);

// 5)

// let languages = ['html', 'css', 'javascript', 'python', 'php'];

// let higherThree = languages.filter(function(item){
//     return item.length > 3;
// })
// console.log(higherThree);

// 6)

// let item = [12, 'google', 32, 'null', 'yahoo', 25];

// let newIrray = item.map(function(a){
//     if(typeof a=== 'string'){
//         return a.toUpperCase();
//     }
//     else if(typeof a==='number'){
//         return Math.pow(a,2);
//     }
//     else {
//         return a;
//     }
// })
// console.log(newIrray);

// 7)

// let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];

// let newWords = words.filter(function(item){
//     return item.includes('M') || item.includes('m');
// });
// console.log(newWords);

// 8)

// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let arr3 = [5, 6];

// let bigOne = arr1.concat(arr2).concat(arr3);
// console.log(bigOne);

// 9)

// let arr = [1, 2, 3, 4, 5];


// 10)

// let numbers = [-2, 5, 10, -5, -1, 1, 3, 4, -15];

// let positive = numbers.filter(function(item){
//     return item > 0;
// })
// console.log(positive);

// 11)

// let arr = [-1, -2, -3, 4].some(function(item){
//     if(item > 0){
//         return item;
//     }
// })
// console.log(arr);

// 12)

// let numbers = [7, 10, 20, 35, 60, 48, 100, 254];

// let Minalue = numbers.sort((x, y) => y - x)[numbers.length-1];
// console.log(Minalue);

// 13)

// let array =[1, 2, 3, 4, 5];

// array.splice(3,0, 'a', 'b', 'c');
// console.log(array);