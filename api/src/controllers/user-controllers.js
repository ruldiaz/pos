const { response } = require('express');

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

const usersPostController = (req, res = response )=>{
    const {nombre, edad} = req.body;

    res.status(201).json({
        msg: 'post API controller',
        nombre,
        edad
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