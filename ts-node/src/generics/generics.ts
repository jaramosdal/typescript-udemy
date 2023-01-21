export const printObject = (argument: any) => {
    console.log(argument);
}

export function genericFunction<T>(generic: T): T {
    return generic;
}

export const genericFunctionArrow = <T>(argument: T) => argument;