import { db } from '../services/db.service.js';

class LessonController {
  async getLessons(req, res) {
    try {
      const lessons = await db.many(`SELECT * FROM lessons`);
      res.status(200).json(lessons);
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: 'Bad request' });
    }
  }

  async getLessonById(req, res) {
    try {
      const { id } = req.params;
      const lesson = await db.one(`SELECT * FROM lessons WHERE id=$1`, id);
      res.status(200).json(lesson);
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: 'Bad request' });
    }
  }

  async createLesson(req, res) {
    try {
      const { title, video, topic, description } = req.body;
      await db.none(`INSERT INTO lessons (title, video, topic, description) VALUES ($1, $2, $3, $4)`, [title, video, topic, description]);
      res.status(201).json({ msg: 'New lesson created' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: 'Bad request' });
    }
  }

  async updateLesson(req, res) {
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

  async deleteLesson(req, res) {
    try {
      const { id } = req.params;
      await db.none(`DELETE FROM lessons WHERE id=$1`, id);
      res.status(200).json({ msg: 'Lesson deleted' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: 'Bad request' });
    }
  }
}

export default LessonController