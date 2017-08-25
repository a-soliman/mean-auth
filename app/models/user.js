var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs')
let UserSchema = new Schema({
  firstName: { type: String, required: true, minlength: 2 },
  lastName: { type: String, required: true, minlength: 2 },
  username: { type: String, lowercase: true, required: true, unique: true },
  password: { type: String, required: true, minlength: 6 },
  email: { type: String, required: true, unique: true },
  desk: { type: String, required: true, unique: true}
});

UserSchema.pre('save', function(next) {
  let user = this;

  bcrypt.hash(user.password, null ,null, function(err, hash) {
    if (err) return next(err);
    user.password = hash;
    next()
  })

  
})


module.exports = mongoose.model('User', UserSchema);