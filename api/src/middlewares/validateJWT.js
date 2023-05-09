const { response, request } = require('express');
const jwt = require('jsonwebtoken');
const User = require('../database/model/user');

const validateJWT = async ( req = request, res = response, next ) => {
    const token = req.header('x-token');

    if ( !token ) {
        return res.status(401).json({
            msg: 'No token, access denied'
        });
    };
   
    try {
        const { uid } = jwt.verify( token, process.env.SECRETORPRIVATEKEY );
        const user = await User.findById(uid);
      
        req.user = user;
        
        next();
    } catch (error) {
        console.error(error);
        res.status(401).json({
            msg: 'Invalid token'
        });
    };
};

module.exports = {
    validateJWT
};