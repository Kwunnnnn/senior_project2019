let mongoose = require('mongoose');
let User = mongoose.model('User');
let multer = require('multer');

exports.write_data = function (req, res) {

    let new_user = User(req.body);
    new_user.save(function (err, user) {
        if (err) {
            return res.status(200).send(err);
        }
        else {
            return res.status(200).send(user);
        }
    })
};



exports.get_all_data =function (req, res) {
    User.find({}, function (err, user) {
        if (err) {
            return res.status(200).send(err);
        }
        else {
            return res.status(200).send(user);
        }
    })
};

exports.clear_db = function (req, res) {
    User.remove({}, function (err, data) {
        if (err) {
            return res.status(200).send(err);
        }
        else {
            return res.status(200).send(data);
        }
    })
};

exports.upload2 = function (req, res) {
    let new_data = User(req.body);
    new_data.save(function (err, data) {
        if (err) {
            return res.status(200).send(err);
        }
        else {
            return res.status(200).send(data);
        }
    })
};