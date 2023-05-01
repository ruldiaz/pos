const express = require('express');
require('dotenv').config();
const { PORT } = process.env; 

const app = express();

app.get('/', (req, res)=>{
    res.send('Hello world');
});

app.get('*', (req, res)=>{
    res.send('404 | Page not found');
})



app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`);
});