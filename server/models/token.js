/**
 * Created by m on 16-4-21.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TokenSchema = new Schema({
    token: {type: String},
    create_at: {type: String, default : Date.now()},
    username: {type: String}

});

module.exports = mongoose.model('Token', TokenSchema);