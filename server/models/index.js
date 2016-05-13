var mongoose = require('mongoose');
var config = require('../config.js');

mongoose.connect(config.mongoUrl, function (err) {
    console.log('mongodb is on', config.mongoUrl);
    if (err) {
        console.log('connect to %s err', config.mongoUrl, err.message);
        process.exit(1);
    }
});

exports.Message = require('./message');
exports.User = require('./user');
exports.Token = require('./token');