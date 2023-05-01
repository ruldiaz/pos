const express = require('express');



class Server {
    constructor(){
        this.app = express();
        this.routes();
        this.PORT = process.env.PORT;
    }

    routes(){
        this.app.get('/', (req, res)=>{
            res.send('Hello world');
        });
        
        this.app.get('*', (req, res)=>{
            res.send('404 | Page not found');
        })
    }

    listen(){
        this.app.listen(this.PORT, ()=>{
            console.log(`Server listening on port ${this.PORT}`);
        });
    }
}

module.exports = Server;