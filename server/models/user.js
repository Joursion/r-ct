/**
 * Created by m on 16-4-9.
 */
/**
 * Created by m on 16-4-9.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: {type: String},
    avatar: {type: String, default: "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1461227566&di=e92a3208d6d4ad14b4292becbe9071b4&src=http://images.yeyou.com/2015/news/2015/07/31/z0731e05s.jpg"},
    register_at: {type: String},
    password: {type: String},
    email: {type: String}
});

module.exports = mongoose.model('User', UserSchema);
