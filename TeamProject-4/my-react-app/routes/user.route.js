import express from 'express';
import { UserController } from '../controllers/user.controller.js';

const router = express.Router();
const userController = new UserController();

router.get('/users', async (req, res) => {
  await userController.getUsers(req, res);
});

router.get('/users/:id', async (req, res) => {
  await userController.getUserById(req, res);
});

router.post('/users', async (req, res) => {
  await userController.createUser(req, res);
});

router.put('/users/:id', async (req, res) => {
  await userController.updateUser(req, res);
});

router.delete('/users/:id', async (req, res) => {
  await userController.deleteUser(req, res);
});

export default router;