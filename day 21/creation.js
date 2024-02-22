const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/cookies',(req,res)=>{
    res.cookie('Ark-x','im the value cookies',{maxAge: 60000});
    res.send("cookies saved");
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
