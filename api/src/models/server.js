const express = require('express');
const cors = require('cors');
const usersRouter = require('../routes/user-routes');
const { dbConnection } = require('../database/config');
const authRouter = require('../routes/auth-routes');


class Server {
    constructor(){
        this.app = express();
        this.PORT = process.env.PORT || 3001;
        this.usersPath = '/api/users';
        this.authPath = '/api/auth';

        // Connect to DB
        this.connectDb();
        
        //Middlewares
        this.middlewares();

        //Routes
        this.routes();
    }

    async connectDb(){
        await dbConnection();
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
        this.app.use(this.authPath, authRouter);
        this.app.use(this.usersPath, usersRouter);
    }

    listen(){
        this.app.listen(this.PORT, ()=>{
            console.log(`Server listening on port ${this.PORT}`);
        });
    }
}

module.exports = Server;