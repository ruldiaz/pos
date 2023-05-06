const { Router } = require('express');
const { usersGetController, usersPutController, usersPostController, usersDeleteController } = require('../controllers/user-controllers');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validateFields');

const usersRouter = Router();


usersRouter.get('/', usersGetController)

usersRouter.put('/:id', usersPutController);

usersRouter.post('/', [
    check('name', 'name required').not().isEmpty(),
    check('password', 'password required, at least 6 characters').isLength({ min: 6 }),
    check('email', 'invalid email address').isEmail(),
    check('role', 'invalid role').isIn(['admin_role','user_role']),
    validateFields
], usersPostController);

usersRouter.delete('/', usersDeleteController);


module.exports = usersRouter;