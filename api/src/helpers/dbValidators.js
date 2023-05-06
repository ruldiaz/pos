const Role = require('../database/model/role');
const User = require('../database/model/user');

const isRoleValid = async ( role = '' ) => {

    const roleExists = await Role.findOne({ role: role });
    if ( !roleExists ) {
        throw new Error(`Role ${ role } not found in db`)
    }
};

// verify if email exists
const emailExists = async ( email = '' ) => {
    
    const emailExistsResult = await User.findOne({ email: email });
    if( emailExistsResult ){ 
        throw new Error(`Email ${ email } already exists`);
    };
};

// verify if user id exists
const userIdExists = async ( id ) => {
    
    const userIdExistsResult = await User.findById(id);
    if( !userIdExistsResult ){ 
        throw new Error(`Id ${ id } not found`);
    };
};

module.exports = {
    isRoleValid,
    emailExists,
    userIdExists
};