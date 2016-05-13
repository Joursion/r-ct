/**
 * Created by m on 16-4-21.
 */
var Token = require('../models/index').Token;

exports.addToken = function (data) {
    return Token.create(data);
};

exports.getTokenByToken = function (token) {
    return Token.findOne({token: token}).exec();
};

exports.updateToken = function (name, token) {
    return Token.findOneAndUpdate({username: name}, {$set: {token: token}}).exec();
};

exports.delete = function (data) {
    return Token.findOneAndRemove({token: data}).exec();
};
