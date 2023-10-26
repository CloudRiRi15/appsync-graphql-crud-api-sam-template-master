const AWS = require('aws-sdk')
const dynamodb = new AWS.DynamoDB()

const tableName = process.env.TABLE_NAME

exports.handler = async(event) => {
    const studentId = event.studentId
    const courseId = event.courseId

    const params = {
        Key: {
            "studentId": {
                S: studentId
            },
            "courseId": {
                S: courseId
            }
        },
        TableName: tableName
    }

    return dynamodb.getItem(params).promise()
        .then(data => {
            const body = data.Item
            console.log(body.name.S)
            return {
                studentId: body.studentId.S,
                courseId: body.courseId.S,
                name: body.name.S,
                email: body.email.S,
                year: body.year.S
            }
        })
        .catch(err => console.log(err))

};
