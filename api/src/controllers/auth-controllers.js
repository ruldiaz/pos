const { response } = require("express");
const User = require('../database/model/user');
const bcryptjs = require('bcryptjs');
const { generateJWT } = require("../helpers/generate-jwt");

const login = async (req, res = response) => {

    const { email, password } = req.body;

    try {

        // verify if email exists
        const user = await User.findOne({ email: email });
        if ( !user ) {
            return res.status(400).json({
                msg: 'Email or password not valid'
            });
        };

        // verify status of user
        if ( !user.status ) { 
            return res.status(400).json({
                msg: 'User status inactive'
            });
        };

        // verify password
        const validPassword = bcryptjs.compareSync( password, user.password); // true if correct
        if ( !validPassword ) {
            return res.status(400).json({
                msg: 'Invalid password'
            });
        };

        // generate JWT
        const token = await generateJWT(user.id);

        res.json({
            msg: 'Login ok',
            user,
            token
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Contact admin'
        });
    };


}


module.exports = {
    login
}