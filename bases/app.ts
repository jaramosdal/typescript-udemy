const  msg: string = 'Hola mundo.';

const hero = {
    name: 'Ironman',
    age: 45
}

hero.age = 50

console.log(hero.age + 1)


// 1. Situarse en la carpeta del proyecto:
// cd ./bases

// 2. Transpilar a TypeScript:
// tsc app.ts
// o
// tsc app

// 3. Crear el tsconfig.json
// tsc --init

// 4. Una vez creado el tsconfig.json, puedo transpilar todos los archivos sólo con:
// tsc

// 5. Modo observador:
// tsc --watch