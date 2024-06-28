import { db } from '../services/db.service.js';

class ExerciseController {
  async getExercises(req, res) {
    try {
      const exercises = await db.many(`SELECT * FROM exercises`);
      res.status(200).json(exercises);
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: 'Bad request' });
    }
  }

  async getExerciseById(req, res) {
    try {
      const { id } = req.params;
      const exercise = await db.one(`SELECT * FROM exercises WHERE id=$1`, id);
      res.status(200).json(exercise);
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: 'Bad request' });
    }
  }

  async createExercise(req, res) {
    try {
      const { title, video, topic, description } = req.body;
      await db.none(`INSERT INTO exercises (title, video, topic, description) VALUES ($1, $2, $3, $4)`, [title, video, topic, description]);
      res.status(201).json({ msg: 'New exercise created' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: 'Bad request' });
    }
  }

  async updateExercise (req, res) {
    try {
      const { id } = req.params;
      const updateFields = {};

      if (req.body.title) updateFields.title = req.body.title;
      if (req.body.video) updateFields.video = req.body.video;
      if (req.body.topic) updateFields.topic = req.body.topic;
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
  }

  async deleteExercise(req, res) {
    try {
      const { id } = req.params;
      await db.none(`DELETE FROM exercises WHERE id=$1`, id);
      res.status(200).json({ msg: 'Exercise deleted' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: 'Bad request' });
    }
  }
}

export default ExerciseController