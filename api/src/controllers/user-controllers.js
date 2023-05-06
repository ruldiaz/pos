const { response } = require('express');
const User = require('../database/model/user');
const bcryptjs = require('bcryptjs');


const usersGetController = async (req, res = response )=>{
    
    const { limit = 5, from = 0 } = req.query;
    const onlyTrue = { status: true };

    const [ total, users ] = await Promise.all([
        User.countDocuments( onlyTrue ),
        User.find( onlyTrue ).skip(Number(from)).limit(Number(limit))
    ]);

    res.status(200).json({ 
        total,
        users
     });
};

const usersPutController = async (req, res = response )=>{

    const id = req.params.id;
    const { _id, password, google, email, ...rest } = req.body;

    // validate id in db
    if( password ){
        // encrypt password
        const salt = bcryptjs.genSaltSync();
        rest.password = bcryptjs.hashSync(password, salt);
    }

    const user = await User.findByIdAndUpdate( id, rest );


    res.status(200).json(user);
};

const usersPostController = async (req, res = response )=>{


    const { name, email, password, role } = req.body;
    const user = new User( { name, email, password, role } );

    // encrypt password
    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync( password, salt );

    // save in db
    await user.save();

    res.status(201).json({
        user
    });
};

const usersDeleteController = async (req, res)=>{

    const { id } = req.params;

    const deletedUser = await User.findByIdAndUpdate( id, { status: false });

    res.status(200).json( deletedUser );
};

module.exports = {
    usersGetController,
    usersPutController,
    usersPostController,
    usersDeleteController
};