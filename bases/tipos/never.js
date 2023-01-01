"use strict";
(() => {
    const error = (message) => {
        throw new Error(message);
    };
    // error('Auxilio');
    console.log('No llegará aquí');
    const errorCondicional = (ok, message) => {
        if (!ok) {
            throw new Error(message);
        }
        return `Mensaje enviado: ${message}`;
    };
    console.log(errorCondicional(true, 'Hola'));
    console.log(errorCondicional(false, 'Adios'));
})();
