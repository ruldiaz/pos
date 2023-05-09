const { Router } = require('express');
const { check } = require('express-validator');
const { login } = require('../controllers/auth-controllers');
const { validateFields } = require('../middlewares/validateFields');

const authRouter = Router();

authRouter.post('/login', [
    check('email', 'Email required').isEmail(),
    check('password', 'Password required').not().isEmpty(),
    validateFields
], login );

module.exports = authRouter;