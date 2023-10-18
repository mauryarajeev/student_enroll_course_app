
# Student-Course Enrollment API

A simple API built with Node.js, Express, and MongoDB to manage students, courses, and enrollments. This API facilitates operations such as creating and retrieving students and courses, as well as enrolling students in various courses.

## Installation

1. Clone the repository: https://github.com/your-username/your-repository.git
2. Install the dependencies: npm install
3.  Run the development server: npm start
      
## API Endpoints

### Create a Student

- **Endpoint:** `POST /students`
- **Request Body:**
```json
{
 "name": "John Doe",
 "email": "johndoe@example.com",
 "course": "Computer Science",
 "mobileNumber": "1234567890",
 "address": "123 Street, City"
}




