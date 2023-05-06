const Role = require('../database/model/role');

const isRoleValid = async ( role = '' ) => {
    const roleExists = await Role.findOne({ role: role });
    if ( !roleExists ) {
        throw new Error(`Role ${ role } not found in db`)
    }
};

module.exports = {
    isRoleValid
};