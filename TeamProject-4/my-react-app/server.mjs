import express from 'express';
import dotenv from 'dotenv';
import { users as usersData } from './users.mjs';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors())

app.use(express.json());

let users = [...usersData]; 

app.get('/users', (req, res) => {
  res.status(200).json(users);
});

app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  const user = users.find((e) => e.id === Number(id));
  res.status(200).json(user);
});

app.post('/users', (req, res) => {
  const { id, name, role } = req.body;
  const newUser = { id, name, role };
  users = [...users, newUser]; 

  res.status(201).json({ msg: 'New user created' });
});

app.put('/users/:id', (req, res) => {
    const {id} = req.params
    const {role} = req.body
    users = users.map(e => e.id === Number(id) ? {...e, role} : e)

    res.status(200).json({msg: 'User updated'})
 })

app.delete('/users/:id', (req, res) => {
    const {id} = req.params
    users = users.filter(e => e.id !== Number(id))

    res.status(200).json({msg: 'user deleted'})
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

