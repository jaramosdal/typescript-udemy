
// Función anónima autoinvocada
// Esto lo hacemos para poder crear varios archivos dentro del mismo
// proyecto y que no caígan dentro del scope global, y nos evitamos errores con los ejemplos.
(() => {
    const a:number = 10;
    console.log(a)
})()