# AppSync GraphQL CRUD API SAM Template

You can find here a basic serverless CRUD AppSync GraphQL API. You can create, retrieve, update and delete student information. 

To get this workshop setup you will need to do the following:

 **Important:** change the name of the bucket inside `package.json` (bucket names must be unique)
 `npm run qd` it will automatically start the packaging and deployment process


## Some Sample Queries

```graphql
mutation create {
  createStudent(studentId: "52400", courseId: "65900", name: "Olivia Benson", year: "2022", email: "oliviabenson@svu.com) {
    name
    year
    email
  }
}

query get {
  getStudent(studentId: "52400", studentId: "65900") {
    name
    year
    email
  }
}

mutation update {
  updateStudent(customerId: "52400", coursed: "65900", name: "Leeroy Jethro Gibbs", year: "2023", email: "gibbs@ncis.com") {
    name
    year
    email
  }
}

mutation delete {
  deletestudent(studentId: 52400", courseId:"65900") {
    studentId
    courseId
  }
}
```
