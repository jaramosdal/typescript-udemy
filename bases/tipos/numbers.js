"use strict";
(() => {
    let avengers = 10;
    const villians = 20;
    if (avengers < villians) {
        console.log('Estamos en problemas');
    }
    else {
        console.log('Estamos salvados');
    }
    avengers = 123;
    avengers = Number('123');
    // Sería NaN, y NaN se considera un número.
    avengers = Number('55A');
})();
//# sourceMappingURL=numbers.js.map