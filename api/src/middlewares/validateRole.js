const { response, request } = require("express");


const isAdminRole = (req = request, res = response, next) => {
    if(!req.user){
        return res.status(500).json({
            msg: 'user without token, not allowed'
        });
    };

    const { role, name } = req.user;
    if(role !== 'admin_role'){
        return res.status(401).json({
            msg: `${name} is not admin, cannot proceed`
        });
    };
    
    next();
};

module.exports = {
    isAdminRole
};