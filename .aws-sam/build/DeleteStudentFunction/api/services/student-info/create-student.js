const AWS = require('aws-sdk')
const dynamodb = new AWS.DynamoDB()

const tableName = process.env.TABLE_NAME

exports.handler = async(event) => {
    const studentId = event.studentId
    const courseId = event.courseId
    const name = event.name
    const email = event.email
    const year = event.year

    const params = {
        Item: {
            "studentId": {
                S: studentId
            },
            "courseId": {
                S: courseId
            },
            "name": {
                S: name
            },
            "email": {
                S: email
            },
            "year": {
                S: year
            }
        },
        ReturnConsumedCapacity: "TOTAL",
        TableName: tableName
    }

    return dynamodb.putItem(params).promise()
        .then(data => {
            console.log(data)
            return {
                studentId,
                courseId,
                name,
                email,
                year
            }
        })
        .catch(err => {
            console.log(err)
        })

}
