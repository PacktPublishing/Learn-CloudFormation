var AWS = require('aws-sdk');
var ddb = new AWS.DynamoDB();
exports.handler = (event, context, callback) => {
    var params = {
        TableName: 'mydynamodb',
        Item: {
           'id': {S:new Date().getTime().toString()},
           'email': {S:event.email},
           'name': {S:event.name},
           'country' : {S:event.country},
           'age' : {N:event.age},
        }
    };
    ddb.putItem(params, function(err, data) {
       if (err) {
          callback(err, 'Error');
       } else {
          callback(null, 'Insert data was succeed');
       }
    });
}