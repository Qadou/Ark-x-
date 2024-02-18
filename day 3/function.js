function add(a, b) {
    return a + b;
}
add(1, 2); // Argument of type 'string' is not assignable to parameter of type 'number'.
var greet = function (name) {
    return "Hello ".concat(name);
};
// The type void can be used to indicate a function doesn't return any value.
function display() {
    console.log(greet("anas"));
}
display();
