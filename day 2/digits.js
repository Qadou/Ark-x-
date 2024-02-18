//methode 1
function digitalRoot(n) {
    let a = n.toString().split("")
    sum = 0
    sr = ""
    for (let i = 0; i < a.length; i++){
        sum = sum + parseInt(a[i])
        if (i >= 1){
            sr = sr + " + " + a[i]
        }
    }
    if (sum < 10) return sum
    else if (sum >= 10){
        digitalRoot(sum)
        return sum
    }
}

console.log(digitalRoot(456))
//methode 2
// function digitalRoot(n) {
 
//     let x = n.toString().split("").map(Number)
//       let sum = 0;
  
//       for( let i = 0 ; i < x.length; i++){
//           sum =  sum + x[i];
//       }
//      let y = sum.toString().split("").map(Number)
//       if(y.length > 1){
  
//         let s =0 
//             for( let j = 0 ; j < y.length; j++)
//           s =  s + y[j];
//       return s
//       } else
//       return sum;
//   }
//   console.log(digitalRoot(98986795979));