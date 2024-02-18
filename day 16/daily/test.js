
const express = require('express'); 
  
const app = express(); 
const PORT = 3000; 
  
app.get('/hamza', (req, res)=>{ 
    res.status(200); //succesfully
    res.send("<h1 style = 'color :red'>Welcome to root URL hamza</h1>\n <ol><li>banana</li><li>watermelon</li></ol>"); 
}); 
  
app.listen(PORT, (error) =>{ 
    if(!error) 
        console.log("Server is Successfully Running and App is listening on port "+ PORT) 
    else 
        console.log("Error occurred, server can't start", error); 
    } 
); 