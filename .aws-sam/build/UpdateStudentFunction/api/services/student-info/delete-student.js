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


    return dynamodb.deleteItem(params).promise()
        .then(data => {
            console.log(data)
            return {
                studentId,
                courseId
            }

        })
        .catch(err => console.log(err))
};
