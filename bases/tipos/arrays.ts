(() => {
    // const numbers: (string | number | boolean)[] = [1, 2, 3, 4, 5, '6', 7, 8, 9, 10]
    // numbers.push(true);
    // numbers.push(11);
    // numbers.push('12');
    
    const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const villian = ['Omega Rojo', 'Dormamu','Duende Verde'];

    villian.forEach(v => {
        console.log(v.toUpperCase())
    });
    
    numbers.forEach(number => console.log(number));

    console.log(numbers)
})()