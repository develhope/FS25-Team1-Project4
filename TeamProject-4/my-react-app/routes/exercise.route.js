import express from 'express';
import ExerciseController from '../controllers/exercise.controller.js';

const router = express.Router();
const exerciseController = new ExerciseController()

router.get('/lessons', async (req, res) => {
    await exerciseController.getLessons(req, res);
  });
  
  router.get('/lessons/:id', async (req, res) => {
    await exerciseController.getLessonById(req, res);
  });
  
  router.post('/lessons', async (req, res) => {
    await exerciseController.createLesson(req, res);
  });
  
  router.put('/lessons/:id', async (req, res) => {
    await exerciseController.updateLesson(req, res);
  });
  
  router.delete('/lessons/:id', async (req, res) => {
    await exerciseController.deleteLesson(req, res);
});

export default router;