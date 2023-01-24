function printToConsole(constructor: Function){
    console.log(constructor)
}

const printToConsoleConditional = (print: boolean): Function => {
    if (print) {
        return printToConsole;
    } else {
        return () => {}
    }
}

const bloquearPrototipo = function(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

// Decorador de método
function CheckValidPokemonId() {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = (id: number) => {
            if (id  < 1 || id > 800) {
                return console.error('El id de pokémos debe estar entre 1 y 800.');
            } else {
                return originalMethod(id);
            }
        }
        // descriptor.value = () => console.log('Hola mundo!')
    }
}

// Decorador de propiedad
function readOnly(isReadOnly: boolean = true): Function {
    return function(target: any, propertyKey: string) {
        const descriptor: PropertyDescriptor = {
            get() {
                return 'Javi'
            },
            set(this, val) {
                // console.log(this, val)
                Object.defineProperty(this, propertyKey, {
                    value: val,
                    writable: !isReadOnly,
                    enumerable: false
                })
            }
        }

        return descriptor;
    }
}

@bloquearPrototipo
@printToConsoleConditional(false)
export class Pokemon {

    @readOnly(true)
    public publicApi: string = 'https://pokeapi.co'

    constructor(
        public name: string
    ) {}

    @CheckValidPokemonId()
    savePokemonToDB(id: number) {
        console.log(`Pokémon guardado en la DB ${id}`)
    }
}