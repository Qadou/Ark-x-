const fs = require('fs')
const content = "some text write by othmane"
const url = './file.txt' ;

fs.writeFileSync(url,content,(err,data)=>{
    if(data){
        console.log(typeof(data));
    }
    else{
        console.log(typeof(err)) ;
    }
})

