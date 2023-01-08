"use strict";
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo está salvado!`;
    //let myFunction;
    // myFunction = 10;
    // console.log(myFunction);
    // Asigna por referencia
    // let myFunction: (y: string, z: number) => number;
    // myFunction = addNumbers;
    // console.log(myFunction(1, 2));
    // let myFunction: (y: string) => string;
    // myFunction = greet;
    // console.log(myFunction('Javi'));
    let myFunction;
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
//# sourceMappingURL=function-type.js.map