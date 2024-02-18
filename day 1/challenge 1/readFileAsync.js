const fs = require('fs');

// const url = './file.txt' ;


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


// const string = "aaaaaaaaaa"
// const newstring = string.toUpperCase()
// console.log(newstring)
module.exports = readFileAsync 