/**
 * Created by m on 16-4-11.
 */

var Message = require('../models').Message;

exports.addMessage =  function(message){
    return Message.create(message);
};

exports.getMessage = function () {
    return Message.find().sort('time').limit(30).exec();
};

