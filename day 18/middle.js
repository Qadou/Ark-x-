const  express = require('express');
const app = express();
const port = 8080;
app.listen(port);
const auth = false ;
app.use((req, res, next) => {
    console.log('listening on port',port);
    console.log('host: ',req.hostname);
    console.log('path: ',req.path);
    console.log('method: ',req.method);
    if (auth){
        next();
    }
    else {
        res.status(401).send('Unauthorized');
    }

    
})
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}]`);
    next();
  });

app.get('/', (req, res) => {
    res.send('Hello World!');
});