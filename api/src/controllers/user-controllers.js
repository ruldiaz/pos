const { response } = require('express');
const User = require('../database/model/user');
const bcryptjs = require('bcryptjs');


const usersGetController = (req, res = response )=>{
    const { nombre } = req.query;
    res.status(200).json({
        msg: 'get API controller',
        nombre
    });
};

const usersPutController = (req, res = response )=>{
    const id = req.params.id;
    res.status(200).json({
        msg: 'put API controller',
        id
    });
};

const usersPostController = async (req, res = response )=>{


    const { name, email, password, role } = req.body;
    const user = new User( { name, email, password, role } );

    // verify if email exists
    const emailExists = await User.findOne({ email: email });
    if( emailExists ){
        return res.status(400).json({
            msg: 'The email already exists.'
        });
    }

    // encrypt password
    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync( password, salt );

    // save in db

    await user.save();

    res.status(201).json({
        user
    });
};

const usersDeleteController = (req, res)=>{
    res.status(200).json({
        msg: 'delete API controller'
    });
};

module.exports = {
    usersGetController,
    usersPutController,
    usersPostController,
    usersDeleteController
};