/**
 * Created by m on 16-4-9.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messageSchema = new Schema({
    content: {type: String},
    time: {type: Date, default: Date.now()},
    user: {
        username: {type: String},
        avatar: {type: String}
    }
});

module.exports = mongoose.model('Message',messageSchema);
