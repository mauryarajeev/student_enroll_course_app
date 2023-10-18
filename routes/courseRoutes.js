const express = require('express');
const router = express.Router();
const Course = require('../models/Course');

// Create a course
router.post('/', async (req, res) => {
  try {
    const course = new Course({
      title: req.body.title,
    });
    const savedCourse = await course.save();
    res.status(201).json(savedCourse); // Return 201 for successful creation
  } catch (err) {
    res.status(400).json({ message: err.message }); // Handle errors
  }
});

// Get all courses
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a specific course
router.get('/:id', getCourse, (req, res) => {
  res.json(res.course);
});

// Update a course
router.patch('/:id', getCourse, async (req, res) => {
  if (req.body.title != null) {
    res.course.title = req.body.title;
  }
  try {
    const updatedCourse = await res.course.save();
    res.json(updatedCourse);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a course
router.delete('/:id', getCourse, async (req, res) => {
    try {
      await Course.deleteOne({ _id: req.params.id });
      res.json({ message: 'Course deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  

async function getCourse(req, res, next) {
  let course;
  try {
    course = await Course.findById(req.params.id);
    if (course == null) {
      return res.status(404).json({ message: 'Cannot find course' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.course = course;
  next();
}

module.exports = router;
