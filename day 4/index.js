function setReducer(input) {
    if (input.length === 1) {
        return input[0]
    }
    let arr = []
    for ( let i=0 , c=1 ;i<input.length;i++){
        if (input[i]===input[i+1]){
          c++;         
        }
        else {          
            arr.push(c)
            c=1
        }      
    }  console.log(arr);  
    return setReducer(arr);
}
setReducer([1,1,2,3,4,5,7,7]) ;