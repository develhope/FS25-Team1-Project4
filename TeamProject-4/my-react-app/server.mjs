import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import pgPromise from 'pg-promise';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());

app.use(express.json());

const db = pgPromise()('postgres://postgres:postgres@localhost:5432/postgres');

const setupDb = async () => {
    await db.none(` DROP TABLE IF EXISTS users`)
    await db.none(` 
            CREATE TABLE users (
            id SERIAL NOT NULL PRIMARY KEY,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            role TEXT NOT NULL
        )
        `);
    
        await db.none(`INSERT INTO users (name, email, role) VALUES ('John Doe', 'john.doe@example.com', 'admin')`);
        await db.none(`INSERT INTO users (name, email, role) VALUES ('Jane Doe', 'jane.doe@example.com', 'student')`);
        await db.none(`INSERT INTO users (name, email, role) VALUES ('Mario Rossi','mario.rossi@example.com', 'student')`);
        await db.none(`INSERT INTO users (name, email, role) VALUES ('Tizio Caio', 'tizio.caio@example.com', 'student')`);
        await db.none(`INSERT INTO users (name, email, role) VALUES ('Luigi Bianchi', 'luigi.bianchi@example.com', 'student')`);
};

setupDb()

app.get('/users', async (req, res) => {
    const users = await db.many(`SELECT * FROM users`)
    res.status(200).json(users);
});

app.get('/users/:id', async (req, res) => {
    const { id } = req.params;
    const user = await db.one(`SELECT * FROM users WHERE id=$1`, Number(id))

    res.status(200).json(user);
});

app.post('/users', (req, res) => {
    const { name, email, role } = req.body;
    //const newUser = { id, name, email, role };
    db.none(`INSERT INTO users (name, email, role) VALUES ($1, $2, $3)`, [name, email, role])

    res.status(201).json({ msg: 'New user created' });
});

app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { role } = req.body;
    users = users.map((e) => (e.id === Number(id) ? { ...e, role } : e));

    res.status(200).json({ msg: 'User updated' });
});

app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    db.none(`DELETE FROM users WHERE id=$1`, id)

    res.status(200).json({ msg: 'user deleted' });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
