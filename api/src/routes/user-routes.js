const { Router } = require('express');
const { usersGetController, usersPutController, usersPostController, usersDeleteController } = require('../controllers/user-controllers');

const usersRouter = Router();


usersRouter.get('/', usersGetController)

usersRouter.put('/:id', usersPutController);

usersRouter.post('/', usersPostController);

usersRouter.delete('/', usersDeleteController);


module.exports = usersRouter;