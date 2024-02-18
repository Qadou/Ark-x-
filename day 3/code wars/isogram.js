function isisogram(str){
    return str.split("").filter((item, pos, arr)=> arr.indexOf(item) == pos).length == str.length;
}
// console.log(isisogram("abdou"));
function isisogram(str){
    let a=str.toLowerCase().split("");
    for(let i=0; i<a.length; i++){
        for(let j=i+1; j<a.length; j++){

            if(a[j]==a[i]){
                
                return false
               
            }
}
}return true;         
}
console.log(isisogram("aab"));
