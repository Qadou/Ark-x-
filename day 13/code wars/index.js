function istriangle(a,b,c){
    if (a+b>c && a+c>b && b+c>a){
        return true
    }
    return false ;
}
console.log(istriangle(10,5,7))