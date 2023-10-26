const AWS = require('aws-sdk')
const dynamodb = new AWS.DynamoDB()

const tableName = process.env.TABLE_NAME

exports.handler = async (event) => {
    const studentId = event.studentId
    const courseId = event.courseId
    const name = event.name
    const email = event.email
    const year = event.year
    
    const params = {
        ExpressionAttributeNames: {
            "#n": "name",
            "#e": "email",
            "#c": "year"
        },
        ExpressionAttributeValues: {
            ":n": {
                S: name
            },
            ":e": {
                S: email
            },
            ":c": {
                S: year
            }
        },
        Key: {
            "studentId": {
                S: studentId
            },
            "courseId": {
                S: courseId
            }
        },
        ReturnValues: "ALL_NEW",
        TableName: tableName,
        UpdateExpression: "SET #n = :n, #e = :e, #c = :c"
    }
    
    return dynamodb.updateItem(params).promise()
                .then(data => {
                    const body = data.Attributes
                    return {
                        studentId: bodystudentId.S,
                        courseId: body.courseId.S, 
                        name: body.name.S,
                        email: body.email.S,
                        year: body.year.S
                    }
                })
                .catch(err => console.log(err))
};
