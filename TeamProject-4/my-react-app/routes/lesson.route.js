import express from 'express';
import LessonController from '../controllers/lesson.controller.js';

const router = express.Router();
const lessonController = new LessonController()

router.get('/lessons', async (req, res) => {
    await lessonController.getLessons(req, res);
  });
  
  router.get('/lessons/:id', async (req, res) => {
    await lessonController.getLessonById(req, res);
  });
  
  router.post('/lessons', async (req, res) => {
    await lessonController.createLesson(req, res);
  });
  
  router.put('/lessons/:id', async (req, res) => {
    await lessonController.updateLesson(req, res);
  });
  
  router.delete('/lessons/:id', async (req, res) => {
    await lessonController.deleteLesson(req, res);
});

export default router;