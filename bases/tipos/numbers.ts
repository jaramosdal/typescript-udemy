(() => {
    let avengers: number = 10;

    const villians: number = 20;

    if (avengers < villians) {
        console.log('Estamos en problemas');
    }else{
        console.log('Estamos salvados');
    }

    avengers = 123;
    avengers = Number('123');
    // Sería NaN, y NaN se considera un número.
    avengers = Number('55A');

})()