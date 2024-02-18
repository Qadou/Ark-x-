const squar = x => x*x;
console.log(squar(4));

// const multiply = (x,y)=> x*y;
// console.log(multiply(4,2));

const multiply = (a, b) => {
    if (a === 0 || b === 0) {
      return "write a number <> 0 ";
    }
    return a * b;
  };
console.log(multiply(4,0));