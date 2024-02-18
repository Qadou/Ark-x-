const fs = require('fs');
const readFileAsync = require('./readFileAsync');
const writeFileAsync = require('./writeFileAsync');

function addTimeStamp(content) {
    const timestamp = new Date().toISOString();
    return { timestamp: `${timestamp}`, content: `${content}` };
}

const urls = ['./file.txt', './file2.txt'];

async function processFiles(urls, content = "", upperCase = false) {
    const results = [];

    for (let key of urls) {
        console.log("key :",key);
        try {
            if (content.length > 0) {
                writeFileAsync(key,content)
                .then(()=>{
                  console.log("the content write successfuly ")
                })
                .catch((error)=>{
                    console.log("error: ",error)
                })
                
            } 
             if (upperCase) {
                console.log("I'm in UpperCase function")
                readFileAsync(key)
                .then((data)=>
                    {
                        let res = data.result.toUpperCase()
                        console.log("res",res);
                        writeFileAsync(key,res)
                        results.push(res)
                        return results
                    }
                    
                )
                .catch((err)=>{
                    console.log('error',err)
                })
  
            } else {
                
                readFileAsync(key)
                .then((value) => {
                    //   return (results.push(value.result)); 
                    console.log("value",value);
                })
                .catch((err) => {
                    return err ;
                })
                                
            }
        } catch (err) {
            console.log("Error: " + err);
        }
        
    }
    
    return results
}



// Example usage:
// Uncomment the line below to test the function
processFiles(urls,"",true)
.then(results => console.log(results))
.catch((err)=>{console.log(err)})

