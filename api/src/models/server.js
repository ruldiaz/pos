const express = require('express');
const cors = require('cors');
const usersRouter = require('../routes/user-routes');


class Server {
    constructor(){
        this.app = express();
        this.PORT = process.env.PORT;
        this.usersPath = '/api/users';
        
        //Middlewares
        this.middlewares();

        //Routes
        this.routes();
    }

    middlewares(){
        // cors
        this.app.use( cors() );

        // parse and read of body
        this.app.use( express.json() );

        // public directory
        this.app.use( express.static('public'));
    }

    routes(){
        this.app.use(this.usersPath, usersRouter);
    }

    listen(){
        this.app.listen(this.PORT, ()=>{
            console.log(`Server listening on port ${this.PORT}`);
        });
    }
}

module.exports = Server;