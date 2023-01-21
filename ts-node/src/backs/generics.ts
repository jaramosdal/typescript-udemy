import { printObject, genericFunction, genericFunctionArrow } from "../generics/generics";
import { Hero, Villian } from "../interfaces";

// import { Hero } from "./interfaces/hero";
// import { Villian } from "./interfaces/villian";

// printObject(123);
// printObject(new Date());
// printObject({ a: 1, b: 2, c: 3 });
// printObject([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// printObject('Hola mundo');

// const name: string = 'Javi';
// console.log(genericFunction(3.1415).toFixed(2));
// console.log(genericFunction(new Date()).getDate());
// console.log(genericFunctionArrow(name).toUpperCase());

const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Winston Wilson',
    dangerLevel: 130
}

console.log(genericFunctionArrow<Hero>(deadpool).realName);
console.log(genericFunctionArrow<Villian>(deadpool).dangerLevel);