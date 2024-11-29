import { Router } from 'express';
import { authenticateToken } from '../middlewares/authenticate.middleware.js';
import userController from '../controllers/users.controller.js';

const router = Router();
router
.route('/')
.get(userController.getUsers)
.post(userController.createUser);

router
.route('/:id')
.get(authenticateToken,userController.getUser)
.put(authenticateToken,userController.updateUser)
.patch(authenticateToken,userController.activateInactivate)
.delete(authenticateToken,userController.deleteUser);

router.route('/:id/tasks').get(authenticateToken,userController.getTasks);

export default router;