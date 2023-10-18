const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// Create a new student
router.post('/', async (req, res) => {
  try {
    const student = new Student(req.body);
    const savedStudent = await student.save();
    res.status(201).json(savedStudent); // Return 201 for successful creation
  } catch (error) {
    res.status(400).json({ message: error.message }); // Handle errors
  }
});

// Get all students
router.get('/', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message }); // Handle server errors
  }
});

// Get a specific student
router.get('/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.json(student);
  } catch (error) {
    res.status(500).json({ message: error.message }); // Handle server errors
  }
});

// Update a student
router.patch('/:id', async (req, res) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedStudent);
  } catch (error) {
    res.status(400).json({ message: error.message }); // Handle errors
  }
});

// Delete a student
router.delete('/:id', async (req, res) => {
  try {
    const deletedStudent = await Student.findByIdAndRemove(req.params.id);
    res.json(deletedStudent);
  } catch (error) {
    res.status(500).json({ message: error.message }); // Handle server errors
  }
});

module.exports = router;
