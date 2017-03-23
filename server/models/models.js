var mongoose = require("mongoose");
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var UserSchema = mongoose.Schema({
  name: {type:String},
},{timestamps:true});

var ListSchema = mongoose.Schema({
  title: {type:String},
  description: {type:String},
  status: { type: Boolean, default: false },
  tagged : {type:Schema.Types.ObjectId, ref: 'User'},
  users: [],
  owner: {type:Schema.Types.ObjectId, ref: 'User'}
},{timestamps:true});
mongoose.model('User',UserSchema);
mongoose.model('List',ListSchema)
