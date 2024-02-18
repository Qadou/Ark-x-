const fs = require('fs') ;

const url = './file.txt'; 
const url2 = './file2.txt';

function readFileAsync(URL) {
    return new Promise(function(resolve, reject) {
        fs.readFile(URL, 'utf8', (err, data) => {
            if (err) {
                reject({ err: "There is some error!!" });
            } else {
                resolve({ result: data });
            }
        });
    });
}

readFileAsync(url)
    .then((value) => {
        console.log(value.result);
    })
    .catch((err) => {
        console.log(err);
    });


function writeFileAsync(URL,content) {
        return new Promise(function(resolve, reject) {
            fs.writeFile(URL, content , (err, data) => {
                if (err) {
                    reject({ err: "There is some error!!" });
                } else {
                    resolve({status :"the content write successfuly !", result: data });
                }
            });
        });
    }

const content = "some text othmane"
writeFileAsync(url2,content)
        .then((value) => {
            console.log(value.status);
        })
        .catch((err) => {
            console.log(err);
        });
    
        


