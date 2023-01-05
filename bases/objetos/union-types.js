"use strict";
(() => {
    let myCustomVariable = 'Javi';
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'Bruce',
        age: 43,
        powers: [1],
    };
    console.log(typeof myCustomVariable);
})();
