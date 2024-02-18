const fs = require('fs') ;

const url = './file.txt' ;

function writeFileAsync(URL,content) {
        return new Promise(function(resolve, reject) {
            fs.writeFile(URL, content , (err, data) => {
                if (err) {
                    reject({ err: "There is some error!!" });
                } else {
                    resolve("the content write successfuly !" );
                }
            });
        });
    }
    // const content = "some text write by othmane"
    // writeFileAsync(url,content)
    // .then((data)=>{
    //   console.log("the content write successfuly ")
      
    // })
    // .catch((error)=>{
    //     console.log("error: ",error)
    // })


        
module.exports = writeFileAsync
