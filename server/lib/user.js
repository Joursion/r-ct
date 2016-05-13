/**
 * Created by m on 16-4-15.
 */
var User = require('../models').User;

exports.addUser = function (data) {
    return User.create(data);
};

exports.getUserByName = function (username) {
    return User.findOne({username: username}).exec();
};
