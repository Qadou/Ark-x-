const express = require('express');
const bodyParser = require('body-parser'); 
const router = require('./routes/products')
const app = express();
const port = 8080;
app.use(bodyParser.json()); 
const auth = true ;
app.use((req, res, next) => {
    console.log('listening on port',port);
    console.log('host: ',req.hostname);
    console.log('path: ',req.path);
    console.log('method: ',req.method);
    if (auth){
        next();
    }
    else {
        res.status(401).send('<h1 style = color:red >Unauthorized</h1>');
    }


})
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}]`);
    next();
  });

app.use('/',router)


app.listen(port);