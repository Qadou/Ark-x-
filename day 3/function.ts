function add (a: number, b: number) : number {
    return a + b;
}
add(1, 2) // Argument of type 'string' is not assignable to parameter of type 'number'.

const greet = (name: string) : string => {
    return `Hello ${name}`;
}

// The type void can be used to indicate a function doesn't return any value.
function display (name: string): void {
    console.log(name);
}