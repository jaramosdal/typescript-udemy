(() => {
    const addNumbers = (a: number, b: number) => a + b;
    const greet = (name: string) => `Hola ${name}`;
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

    let myFunction: () => string;
    myFunction = saveTheWorld;
    console.log(myFunction());
})()