/*  import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import pgPromise from 'pg-promise';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());

app.use(express.json());

const db = pgPromise()('postgresql://users_owner:IZwrn1bTBU3K@ep-shrill-lake-a2h9f28b.eu-central-1.aws.neon.tech/users?sslmode=require');

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


//api lessons
app.get('/lessons', async (req, res) => {
    try {
        const users = await db.many(`SELECT * FROM lessons`);
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Bad request' });
    }
});

app.get('/lessons/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await db.one(`SELECT * FROM lessons WHERE id=$1`, Number(id));

        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Bad request' });
    }
});

app.post('/lessons', async (req, res) => {
    try {
        const { title, video, topic, description } = req.body;
        await db.none(`INSERT INTO lessons (title, video, topic, description) VALUES ($1, $2, $3, $4)`, [title, video, topic, description]);

        res.status(201).json({ msg: 'New lesson created' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Bad request' });
    }
});

app.put('/lessons/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const updateFields = {};
  
      if (req.body.title) updateFields.title = req.body.title;
      if (req.body.video) updateFields.video = req.body.video;
      if (req.body.topic) updateFields.argument = req.body.topic;
      if (req.body.description) updateFields.description = req.body.description;
  
      if (Object.keys(updateFields).length === 0) {
        return res.status(400).json({ msg: 'No fields to update' });
      }
  
      const setClause = Object.keys(updateFields).map((field, index) => `${field} = $${index + 1}`).join(', ');
      const values = Object.values(updateFields);
  
      await db.none(`UPDATE lessons SET ${setClause} WHERE id = $${values.length + 1}`, [...values, id]);
  
      res.status(200).json({ msg: 'Lesson updated' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: 'Bad request' });
    }
  });

app.delete('/lessons/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await db.none(`DELETE FROM lessons WHERE id=$1`, id);

        res.status(200).json({ msg: 'lesson deleted' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Bad request' });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});*/



import express from 'express';
import cors from 'cors';
import UserRouter from './routes/user.route.js';
import LessonRouter from './routes/lesson.route.js';
import { errorHandler } from './utils/error.handler.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use(UserRouter);
app.use(LessonRouter);
app.use(errorHandler);

app.listen(3001, () => {
  console.log('Server started on port 3001');
})