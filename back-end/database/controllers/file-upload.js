let aws      = require('aws-sdk');
let express  = require('express');
let multer   = require('multer');
let multerS3 = require('multer-s3');

aws.config.update({
    secretAccessKey: 'JBapLPW/48rULdT3b946AP5Hb4jMzO6Q3l0VeCEo',
    accessKeyId: 'AKIAIVERUKSBKCTINKZQ',
    region: 'us-east-2'
});

let s3 = new aws.S3();

let fileFilter = (req, file, cb) => {
    // console.log(file);
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(new Error('Invalid Mime Type, only JPEG and PNG'), false);
    }
};


let upload = multer({
    fileFilter,
    storage: multerS3({
        s3,
        bucket: 'asamamasakul',
        acl: 'public-read',
        metadata: function (req, file, cb) {
            // console.log(req.body);
            cb(null, {fieldName: 'TESTING_META_DATA'});
        },
        key: function (req, file, cb) {
            cb(null, Date.now().toString())
        }
    })
});

module.exports = upload;