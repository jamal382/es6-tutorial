
// const a = 60;
// const b = 56;
// const sum = (a,b) => a - b;
// console.log(sum(a,b));

// const x =10;
// x =20;
// const arr = [];
// arr.push("my name is");
// arr.push('jamal');
// console.log(`i am student.${arr[0]} ${arr[1]}`);

// const print = ()=> {
//     console.log('this is arrow function');
//     }
//     print();
// const print = (name)=> {
//     console.log('this is arrow function.', name);
//     }
// print('Hi jamal, welcome back to my chaneel.');
// const print = name=> {
//     console.log('this is arrow function.', name);
//     }
//     print('Hi jamal, welcome back to my chaneel.');
// // -----------------
// const addMe = (a,b) => {
//     return a + b;
// }

// console.log(addMe(10,30));
// const addMe = (a,b) => a + b;

// console.log(addMe(10,30));
// const obj = {
//     name: 'Jamal khan',
//     print: function(){
//         console.log(this);
//     }
// }
// obj.print();
// const obj = {
//     name: 'Jamal khan',
//     print: function(){
//         setTimeout(function(){
//             console.log(this);
//         }.bind(this));

//     }
// }
// obj.print();
// // -------------ffffff
// const obj = {
//     name: 'Jamal khan',
//     print: function () {
//         setTimeout(() => {

//             console.log(this);
//         },100
//         );

//     }
// }
// obj.print();

// const arr = [19,20,30];

// let [a,b,c] = arr;
// console.log(a);
// console.log(b)

// const obj = {
//     name: "jamal khan",
//     email: "jamal.brotecs@gmail.com"
// }

// /* let name = obj.name;
// let email = obj.email;
//  */
// let {name,email} = obj;

// console.log(name,email);

/* const obj = {
    name: "jamal khan",
    email: "jamal.brotecs@gmail.com"
} */

/* let name = obj.name;
let email = obj.email;
 */
// let {name,email} = obj;

// console.log(name,email);
/* 
function print({name,email}){
    console.log(`hello ${name}, Email: ${email}`);
}  */

// print({email,name});
// Rest  Operator

/* function sum (...num){ 
    return num.reduce((a,b) => a+b);
}

let xum = sum(1,2,3,4,5,-5)
console.log(xum) */
// Spread Operator

// var arr = [1,9,3,4];
// console.log(arr);
/* arr = [...arr,7,44];
console.log(arr);
 */// console.log(...arr);

//  Rest Properties
/*  let { x, y, ...z } = { x: 'jamalk', y: 2, a: 3, b: 4 };
 console.log(x); // 1
 console.log(y); // 2
 console.log(z); // { a: 3, b: 4 } */

//  Spread Properties
/*  let n = { x, y, ...z };
 console.log(n); // { x: 1, y: 2, a: 3, b: 4 } */

//Module System in Details
/*  import * as math from './math';
 console.log(math) */
//  import {add,mod} from './math';
//  console.log(add(2,5));
/* import Person from './person';
let p = new Person("jamal khan", "jamal.khan@brotecs.com")
console.log(p.name);
console.log(p.email); */
import Student from './student'
let stu = new Student('Xabir khan','xabirkhan@gmail.com','1234560');

stu.print();