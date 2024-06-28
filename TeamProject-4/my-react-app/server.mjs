import express from 'express';
import cors from 'cors';
import UserRouter from './routes/user.route.js';
import LessonRouter from './routes/lesson.route.js';
import ExerciseRouter from './routes/exercise.route.js';
import { errorHandler } from './utils/error.handler.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use(UserRouter);
app.use(LessonRouter);
app.use(ExerciseRouter);
app.use(errorHandler);

app.listen(3001, () => {
    console.log('Server started on port 3001');
});
