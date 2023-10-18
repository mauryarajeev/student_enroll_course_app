const express = require('express');
const router = express.Router();
const Enrollment = require('../models/Enrollment');
const Student = require('../models/Student');
const Course = require('../models/Course');

// Enroll a student in a course
router.post('/', async (req, res) => {
  const { studentId, courseId } = req.body;

  try {
    const student = await Student.findById(studentId);
    const course = await Course.findById(courseId);

    if (!student || !course) {
      return res.status(404).json({ message: 'Student or course not found' });
    }

    const enrollment = new Enrollment({
      student: studentId,
      course: courseId,
    });

    const savedEnrollment = await enrollment.save();
    res.status(201).json(savedEnrollment); // Return 201 for successful creation
  } catch (err) {
    res.status(400).json({ message: err.message }); // Handle errors
  }
});

// Retrieve students enrolled in a particular course
router.get('/course/:courseId', async (req, res) => {
  try {
    const courseId = req.params.courseId;
    const enrollments = await Enrollment.find({ course: courseId }).populate('student');
    const students = enrollments.map((enrollment) => enrollment.student);
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
