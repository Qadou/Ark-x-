const myPromise = new Promise(function (resolve, reject) {
    const alright = true;
        setTimeout(function () { 
            if (alright) resolve("Everything went well");
            else reject("Encountered an error");
        }, 2000)
    }); 
    console.log("1");
    myPromise
      .then(function (value) {
        console.log(value);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        console.log("Promise completed");
      });
    console.log("2");
    // output: 
    // 1
    // 2
    // Everything went well
    // Promise completed
    
    