const express = require('express');



class Server {
    constructor(){
        this.app = express();
        this.PORT = process.env.PORT;
        
        //Middlewares
        this.middlewares();

        //Routes
        this.routes();
    }

    middlewares(){
        // public directory
        this.app.use( express.static('public'));
    }

    routes(){
        this.app.get('/api', (req, res)=>{
            res.status(200).json({
                msg: 'get API'
            });
        })

        this.app.put('/api', (req, res)=>{
            res.status(200).json({
                msg: 'put API'
            });
        });

        this.app.post('/api', (req, res)=>{
            res.status(200).json({
                msg: 'post API'
            });
        });

        this.app.delete('/api', (req, res)=>{
            res.status(200).json({
                msg: 'delete API'
            });
        });
    }

    listen(){
        this.app.listen(this.PORT, ()=>{
            console.log(`Server listening on port ${this.PORT}`);
        });
    }
}

module.exports = Server;