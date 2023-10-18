
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
```

### Create a Course

- **Endpoint:** `POST /courses`
- **Request Body:**
```json
{
  "title": "Introduction to Computer Science"
}
```

### Get All student

- **Endpoint:** `GET /students`
- **Responce Body:**
```json
[
	{
		"_id": "652fc7b0e2603ab2302ef120",
		"name": "Rajeev kumar maurya",
		"email": "kumar@example.com",
		"course": "Computer Science and datascrience engineering",
		"mobileNumber": "1234567890",
		"address": "vellore",
		"__v": 0
	},
	{
		"_id": "652fc816e2603ab2302ef122",
		"name": "joe root",
		"email": "root@example.com",
		"course": "mathmatics and datascience",
		"mobileNumber": "1454545599",
		"address": "wall street usa",
		"__v": 0
	},
	{
		"_id": "652fc87ee2603ab2302ef124",
		"name": "anand subarao",
		"email": "anand78@example.com",
		"course": "Electrical engineering",
		"mobileNumber": "1454545500",
		"address": "banglore",
		"__v": 0
	},
	{
		"_id": "652fc8d1e2603ab2302ef126",
		"name": "jhon dow",
		"email": "dow1234@example.com",
		"course": "Electrical engineering",
		"mobileNumber": "1454545511",
		"address": "iceland serisis",
		"__v": 0
	},
	{
		"_id": "652fc944e2603ab2302ef128",
		"name": "harshit shukla",
		"email": "shukla134@example.com",
		"course": "mechanical engineering",
		"mobileNumber": "1454000011",
		"address": "madhya pradesh india",
		"__v": 0
	},
	{
		"_id": "652fc97be2603ab2302ef12a",
		"name": "janvi patel",
		"email": "patel134@example.com",
		"course": "bio engineering",
		"mobileNumber": "1454004511",
		"address": "utter pradesh india",
		"__v": 0
	},
	{
		"_id": "652fc9b3e2603ab2302ef12c",
		"name": "shikha yadav",
		"email": "yadav134@example.com",
		"course": " electronic engineering",
		"mobileNumber": "1454114511",
		"address": "andhra pradesh india",
		"__v": 0
	},
	{
		"_id": "652fc9f8e2603ab2302ef12e",
		"name": "json singh",
		"email": "json134@example.com",
		"course": "mathmatic",
		"mobileNumber": "1454110511",
		"address": "bihar, india",
		"__v": 0
	},
	{
		"_id": "652fca34e2603ab2302ef130",
		"name": "ajeet ramarao",
		"email": "rama134@example.com",
		"course": "commerse",
		"mobileNumber": "1454188511",
		"address": "banglore, karnatka",
		"__v": 0
	},
	{
		"_id": "652fca81e2603ab2302ef132",
		"name": "aditya premchandra",
		"email": "prem134@example.com",
		"course": "machine learning and depp learning",
		"mobileNumber": "9999188511",
		"address": "kerala, karnatka",
		"__v": 0
	}
]
```

### GET all course

- **Endpoint:** `Get /course`
- **Responce Body:**
```json
[
	{
		"_id": "652fc717e2603ab2302ef11e",
		"title": "welcome to the updated course",
		"__v": 0
	},
	{
		"_id": "652fcab5e2603ab2302ef134",
		"title": "Introduction to electrical engineering",
		"__v": 0
	},
	{
		"_id": "652fcacfe2603ab2302ef136",
		"title": "Introduction to mechnical  engineering",
		"__v": 0
	},
	{
		"_id": "652fcaeee2603ab2302ef13a",
		"title": "Introduction to electrical engineering",
		"__v": 0
	},
	{
		"_id": "652fcb04e2603ab2302ef13c",
		"title": "Introduction to eletronic engineering",
		"__v": 0
	},
	{
		"_id": "652fcb0fe2603ab2302ef13e",
		"title": "Introduction to bio engineering",
		"__v": 0
	},
	{
		"_id": "652fcb28e2603ab2302ef140",
		"title": "Introduction to machine learning and deep learning  engineering",
		"__v": 0
	},
	{
		"_id": "652fcbe1e2603ab2302ef142",
		"title": "Introduction to commarce science",
		"__v": 0
	},
	{
		"_id": "652fcbf1e2603ab2302ef144",
		"title": "Introduction to mathmatics",
		"__v": 0
	},
	{
		"_id": "652fcbfde2603ab2302ef146",
		"title": "Introduction to physics",
		"__v": 0
	},
	{
		"_id": "652fcc0fe2603ab2302ef148",
		"title": "Introduction to chemistry",
		"__v": 0
	},
	{
		"_id": "652fcc1ae2603ab2302ef14a",
		"title": "Introduction to bio",
		"__v": 0
	},
	{
		"_id": "652fcc30e2603ab2302ef14c",
		"title": "Introduction to data stracture and algorithum",
		"__v": 0
	}
]
```

### Get a Specific Student

- **Endpoint:** `GET /students/id`
- **Responce Body:**
```json
{
	"_id": "652fc1abe2603ab2302ef11c",
	"name": "John Doe",
	"email": "johndoe@example.com",
	"course": "Computer Science",
	"mobileNumber": "1234567890",
	"address": "123 Street, City",
	"__v": 0
}
```

### Update a Student

- **Endpoint:** `PATCH /students`
- **Request Body:**
```json
{
  "name": "Rajeev kumar maurya",
  "email": "kumar@example.com",
  "course": "Computer Science and datascrience engineering",
  "mobileNumber": "1234567890",
  "address": "vellore"
}
```
- **Responce Body:**
```json
{
	"_id": "652fc7b0e2603ab2302ef120",
	"name": "Rajeev kumar maurya",
	"email": "kumar@example.com",
	"course": "Computer Science and datascrience engineering",
	"mobileNumber": "1234567890",
	"address": "vellore",
	"__v": 0
}
```

### Enroll  a Student

- **Endpoint:** `POST /enrollments`
- **Request Body:**
```json
{
  "studentId": "652fc816e2603ab2302ef122",
  "courseId": "652fcb28e2603ab2302ef140"
}
```

### Get Enroll Student with course

- **Endpoint:** `POST /enrollments/course/`
- **Responce Body:**
```json
[
	{
		"_id": "652fc816e2603ab2302ef122",
		"name": "joe root",
		"email": "root@example.com",
		"course": "mathmatics and datascience",
		"mobileNumber": "1454545599",
		"address": "wall street usa",
		"__v": 0
	}
]
```

### Create a Student

## many more end point like crud operation in student
## many more end point like crud operation in couse
## etc

```




