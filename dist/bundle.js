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
/*! no static exports found */
/***/ (function(module, exports) {

eval("// const a = 60;\n// const b = 56;\n// const sum = (a,b) => a - b;\n// console.log(sum(a,b));\n// const x =10;\n// x =20;\n// const arr = [];\n// arr.push(\"my name is\");\n// arr.push('jamal');\n// console.log(`i am student.${arr[0]} ${arr[1]}`);\n// const print = ()=> {\n//     console.log('this is arrow function');\n//     }\n//     print();\n// const print = (name)=> {\n//     console.log('this is arrow function.', name);\n//     }\n// print('Hi jamal, welcome back to my chaneel.');\n// const print = name=> {\n//     console.log('this is arrow function.', name);\n//     }\n//     print('Hi jamal, welcome back to my chaneel.');\n// // -----------------\n// const addMe = (a,b) => {\n//     return a + b;\n// }\n// console.log(addMe(10,30));\n// const addMe = (a,b) => a + b;\n// console.log(addMe(10,30));\n// const obj = {\n//     name: 'Jamal khan',\n//     print: function(){\n//         console.log(this);\n//     }\n// }\n// obj.print();\n// const obj = {\n//     name: 'Jamal khan',\n//     print: function(){\n//         setTimeout(function(){\n//             console.log(this);\n//         }.bind(this));\n//     }\n// }\n// obj.print();\n// // -------------ffffff\n// const obj = {\n//     name: 'Jamal khan',\n//     print: function () {\n//         setTimeout(() => {\n//             console.log(this);\n//         },100\n//         );\n//     }\n// }\n// obj.print();\n// const arr = [19,20,30];\n// let [a,b,c] = arr;\n// console.log(a);\n// console.log(b)\n// const obj = {\n//     name: \"jamal khan\",\n//     email: \"jamal.brotecs@gmail.com\"\n// }\n// /* let name = obj.name;\n// let email = obj.email;\n//  */\n// let {name,email} = obj;\n// console.log(name,email);\n\n/* const obj = {\r\n    name: \"jamal khan\",\r\n    email: \"jamal.brotecs@gmail.com\"\r\n} */\n\n/* let name = obj.name;\r\nlet email = obj.email;\r\n */\n// let {name,email} = obj;\n// console.log(name,email);\n\n/* \r\nfunction print({name,email}){\r\n    console.log(`hello ${name}, Email: ${email}`);\r\n}  */\n// print({email,name});\n// Rest  Operator\n\n/* function sum (...num){ \r\n    return num.reduce((a,b) => a+b);\r\n}\r\n\r\nlet xum = sum(1,2,3,4,5,-5)\r\nconsole.log(xum) */\n// Spread Operator\n// var arr = [1,9,3,4];\n// console.log(arr);\n\n/* arr = [...arr,7,44];\r\nconsole.log(arr);\r\n */\n// console.log(...arr);\n//  Rest Properties\nlet {\n  x,\n  y,\n  ...z\n} = {\n  x: 'jamalk',\n  y: 2,\n  a: 3,\n  b: 4\n};\nconsole.log(x); // 1\n\nconsole.log(y); // 2\n\nconsole.log(z); // { a: 3, b: 4 }\n//  Spread Properties\n\nlet n = {\n  x,\n  y,\n  ...z\n};\nconsole.log(n); // { x: 1, y: 2, a: 3, b: 4 }\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });