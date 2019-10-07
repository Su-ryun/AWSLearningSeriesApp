import React, { Component } from 'react';
import './Submit.css';

const AWS = require('aws-sdk');

// I can find the below credentials via IAM -> Users -> Security Credentials (this is it).
const s3 = new AWS.S3({
  accessKeyId: "AKIAYHFUHLTYZLMXWDFQ",
  secretAccessKey: "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"
});

const fileName = 'homework-one.txt';

// const uploadFile = () => {
//   fs.readFile(fileName, (err, data) => {
//      if (err) throw err;
//      const params = {
//          Bucket: 'testBucket', // pass your bucket name
//          Key: 'contacts.csv', // file will be saved as testBucket/contacts.csv
//          Body: JSON.stringify(data, null, 2)
//      };
//      s3.upload(params, function(s3Err, data) {
//          if (s3Err) throw s3Err
//          console.log(`File uploaded successfully at ${data.Location}`)
//      });
//   });
// };

// Leaving it there, just incase I need'em.
// const BUCKET_NAME = 'homeworks-aws-learning-series';
// const IdentityPoolId = "us-east-1_oOSESvzV1";
// var bucketRegion = "us-east-1";

// AWS.config.update({
//   region: bucketRegion,
//   credentials: new AWS.CognitoIdentityCredentials({
//     IdentityPoolId: IdentityPoolId
//   })
// });
//
// var s3 = new AWS.S3({
//   apiVersion: "2006-03-01",
//   params: { Bucket: BUCKET_NAME }
// });

class Submit extends Component {

  uploadFile() {
    var fs = require("fs");
    fs.readFile(fileName, (err, data) => {
      if (err) throw err;
      const params = {
          Bucket: 'homeworks-aws-learning-series', // pass your bucket name
          Key: 'finished-homework.txt', // file will be saved as testBucket/contacts.csv
          Body: JSON.stringify(data, null, 2)
      };
      s3.upload(params, function(s3Err, data) {
          if (s3Err) throw s3Err
          console.log(`File uploaded successfully at ${data.Location}`)
      });
    });
  }

  render() {
    this.uploadFile();
    return (
      <div className="row">
      </div>
    )
  }
  
}

export default Submit;