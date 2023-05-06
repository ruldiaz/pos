const { Router } = require('express');
const { usersGetController, usersPutController, usersPostController, usersDeleteController } = require('../controllers/user-controllers');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validateFields');
const { isRoleValid, emailExists, userIdExists } = require('../helpers/dbValidators');


const usersRouter = Router();


usersRouter.get('/', usersGetController)

usersRouter.put('/:id', [
    check('id', 'id not valid').isMongoId(),
    check('id').custom( userIdExists ),
    check('role').custom( isRoleValid ),
    validateFields
], usersPutController);

usersRouter.post('/', [
    check('name', 'name required').not().isEmpty(),
    check('password', 'password required, at least 6 characters').isLength({ min: 6 }),
    check('email', 'invalid email address').isEmail(),
    check('email').custom( emailExists ),
    //check('role', 'invalid role').isIn(['admin_role','user_role']),
    check('role').custom( isRoleValid ),
    validateFields
], usersPostController);

usersRouter.delete('/:id', [
    check('id', 'id not valid').isMongoId(),
    check('id').custom( userIdExists ),
    validateFields
], usersDeleteController);


module.exports = usersRouter;