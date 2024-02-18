function divide (a, b) {
    if (b === 0) {
        throw new Error('Division by 0 is forbidden');
    }
    return a / b;
}

try {
    console.log("BEGIN");
    const res = divide(1, 1);
    console.log("Result = " + res); // won't execute
} catch(error) {
    console.log("An error has occured: " + error.message);
} finally {
    console.log("END");
}
// OUTPUT:
// BEGIN
// 
