// function group(arr) {
//     let a =[];
//     let b = [];
//     for (let i=0; i < arr.length; i++){
//         for (let j=i+1;j < arr.length;j++){
//             if (arr[i] == arr[j]){
//                 c++;
//               a.push(arr[j]);
//               b.push(a);

//             } 
//         }
//     }
//     console.log(b);
//     console.log(c);
//   }
function group(arr) {
let a =[];
arr.forEach((i) => {
    let b =[];
    arr =arr.filter((items)=>{
        if(i===items){
            b.push(i);
            return false;
        }
        return true ;
    })
    if(b.length>0){
        a.push(b)
    }
    
})
console.log(a);
}

group([1,4,2,3,1,2,3])