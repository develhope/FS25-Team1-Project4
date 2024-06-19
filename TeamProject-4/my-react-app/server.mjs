import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import pgPromise from 'pg-promise';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());

app.use(express.json());

const db = pgPromise()('postgresql://users_owner:IZwrn1bTBU3K@ep-shrill-lake-a2h9f28b.eu-central-1.aws.neon.tech/users?sslmode=require');

const setupDb = async () => {
    await db.none(` DROP TABLE IF EXISTS users`);
    await db.none(`
            CREATE TABLE users (
            id SERIAL NOT NULL PRIMARY KEY,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            role TEXT NOT NULL,
            vote REAL DEFAULT NULL
        )
        `);

    // await db.none(`INSERT INTO users (name, email, role, vote) VALUES ('John Doe', 'john.doe@example.com', 'admin', )`);
    // await db.none(`INSERT INTO users (name, email, role, vote) VALUES ('Jane Doe', 'jane.doe@example.com', 'student', '4')`);
    // await db.none(`INSERT INTO users (name, email, role, vote) VALUES ('Mario Rossi','mario.rossi@example.com', 'student')`);
    // await db.none(`INSERT INTO users (name, email, role, vote) VALUES ('Tizio Caio', 'tizio.caio@example.com', 'student')`);
    // await db.none(`INSERT INTO users (name, email, role, vote) VALUES ('Luigi Bianchi', 'luigi.bianchi@example.com', 'student')`);
};

// setupDb();

app.get('/users', async (req, res) => {
    try {
        const users = await db.many(`SELECT * FROM users`);
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Bad request' });
    }
});

app.get('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await db.one(`SELECT * FROM users WHERE id=$1`, Number(id));

        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Bad request' });
    }
});

app.post('/users', async (req, res) => {
    try {
        const { name, email, role } = req.body;
        await db.none(`INSERT INTO users (name, email, role) VALUES ($1, $2, $3)`, [name, email, role]);

        res.status(201).json({ msg: 'New user created' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Bad request' });
    }
});

app.put('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { role } = req.body;
        users = users.map((e) => (e.id === Number(id) ? { ...e, role } : e));

        res.status(200).json({ msg: 'User updated' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Bad request' });
    }
});

app.delete('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await db.none(`DELETE FROM users WHERE id=$1`, id);

        res.status(200).json({ msg: 'user deleted' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Bad request' });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
