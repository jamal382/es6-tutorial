/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'cluster'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n // const a = 60;\n// const b = 56;\n// const sum = (a,b) => a - b;\n// console.log(sum(a,b));\n// const x =10;\n// x =20;\n// const arr = [];\n// arr.push(\"my name is\");\n// arr.push('jamal');\n// console.log(`i am student.${arr[0]} ${arr[1]}`);\n// const print = ()=> {\n//     console.log('this is arrow function');\n//     }\n//     print();\n// const print = (name)=> {\n//     console.log('this is arrow function.', name);\n//     }\n// print('Hi jamal, welcome back to my chaneel.');\n// const print = name=> {\n//     console.log('this is arrow function.', name);\n//     }\n//     print('Hi jamal, welcome back to my chaneel.');\n// // -----------------\n// const addMe = (a,b) => {\n//     return a + b;\n// }\n// console.log(addMe(10,30));\n// const addMe = (a,b) => a + b;\n// console.log(addMe(10,30));\n// const obj = {\n//     name: 'Jamal khan',\n//     print: function(){\n//         console.log(this);\n//     }\n// }\n// obj.print();\n// const obj = {\n//     name: 'Jamal khan',\n//     print: function(){\n//         setTimeout(function(){\n//             console.log(this);\n//         }.bind(this));\n//     }\n// }\n// obj.print();\n// // -------------ffffff\n// const obj = {\n//     name: 'Jamal khan',\n//     print: function () {\n//         setTimeout(() => {\n//             console.log(this);\n//         },100\n//         );\n//     }\n// }\n// obj.print();\n// const arr = [19,20,30];\n// let [a,b,c] = arr;\n// console.log(a);\n// console.log(b)\n// const obj = {\n//     name: \"jamal khan\",\n//     email: \"jamal.brotecs@gmail.com\"\n// }\n// /* let name = obj.name;\n// let email = obj.email;\n//  */\n// let {name,email} = obj;\n// console.log(name,email);\n\n/* const obj = {\r\n    name: \"jamal khan\",\r\n    email: \"jamal.brotecs@gmail.com\"\r\n} */\n\n/* let name = obj.name;\r\nlet email = obj.email;\r\n */\n// let {name,email} = obj;\n// console.log(name,email);\n\n/* \r\nfunction print({name,email}){\r\n    console.log(`hello ${name}, Email: ${email}`);\r\n}  */\n// print({email,name});\n// Rest  Operator\n\n/* function sum (...num){ \r\n    return num.reduce((a,b) => a+b);\r\n}\r\n\r\nlet xum = sum(1,2,3,4,5,-5)\r\nconsole.log(xum) */\n// Spread Operator\n// var arr = [1,9,3,4];\n// console.log(arr);\n\n/* arr = [...arr,7,44];\r\nconsole.log(arr);\r\n */\n// console.log(...arr);\n//  Rest Properties\n\n/*  let { x, y, ...z } = { x: 'jamalk', y: 2, a: 3, b: 4 };\r\n console.log(x); // 1\r\n console.log(y); // 2\r\n console.log(z); // { a: 3, b: 4 } */\n//  Spread Properties\n\n/*  let n = { x, y, ...z };\r\n console.log(n); // { x: 1, y: 2, a: 3, b: 4 } */\n//Module System in Details\n\n/*  import * as math from './math';\r\n console.log(math) */\n//  import {add,mod} from './math';\n//  console.log(add(2,5));\n\n/* import Person from './person';\r\nlet p = new Person(\"jamal khan\", \"jamal.khan@brotecs.com\")\r\nconsole.log(p.name);\r\nconsole.log(p.email); */\n// Classes And Inheritance in Details\n\n/* import Student from './student'\r\nlet stu = new Student('Xabir khan','xabirkhanbd@gmail.com','1234560');\r\nstu.print(); */\n//  Promise\n\n/* let myFirstPromise = new Promise(\r\n    (resolve,reject) => {\r\n        let name = \"jamal khan\";\r\n        //resolve(name);\r\n        setTimeout(\r\n            ()=>resolve(name),3000\r\n        );\r\n    }\r\n);\r\n// console.log(myFirstPromise);\r\nmyFirstPromise.then(name =>{\r\n    console.log(`i am ${name}`);\r\n}); */\n\nfetch(\"https://jsonplaceholder.typicode.com/users\").then(response => response.json()) //.then(body => console.log(body))\n.then(body => {//body.map(data => console.log(data.name))\n\n  /*    const lis = body.map((data) =>{\r\n         let li = document.createElement(\"li\");\r\n         let text = `Name: ${data.name}, Email: ${data.email}`;\r\n         let textNode = document.createTextNode(text);\r\n  \n         li.append(textNode);\r\n  \n         return li;\r\n     });\r\n  \n     lis.forEach(element => {\r\n        document.getElementById(\"mylist\").appendChild(element);\r\n     }); */\n}).catch(err => console.log(err));\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });