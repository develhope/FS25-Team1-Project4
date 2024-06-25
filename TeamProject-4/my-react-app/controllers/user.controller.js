import { db } from '../services/db.service.js';

export class UserController {
  async getUsers(req, res) {
    try {
      const users = await db.many(`SELECT * FROM users`);
      res.status(200).json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: 'Bad request' });
    }
  }

  async getUserById(req, res) {
    try {
      const { id } = req.params;
      const user = await db.one(`SELECT * FROM users WHERE id=$1`, Number(id));
      res.status(200).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: 'Bad request' });
    }
  }

  async createUser(req, res) {
    try {
      const { name, email, role } = req.body;
      await db.none(`INSERT INTO users (name, email, role) VALUES ($1, $2, $3)`, [name, email, role]);
      res.status(201).json({ msg: 'New user created' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: 'Bad request' });
    }
  }

  async updateUser(req, res) {
    try {
      const { id } = req.params;
      const { role } = req.body;
      await db.none(`UPDATE users SET role=$1 WHERE id=$2`, [role, id]);
      res.status(200).json({ msg: 'User updated' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: 'Bad request' });
    }
  }

  async deleteUser(req, res) {
    try {
      const { id } = req.params;
      await db.none(`DELETE FROM users WHERE id=$1`, id);
      res.status(200).json({ msg: 'User deleted' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: 'Bad request' });
    }
  }
}