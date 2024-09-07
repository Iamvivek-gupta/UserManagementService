const mongoose = require('mongoose');
const ObjectId = require('mongoose').ObjectId;



const UserSchema = new mongoose.Schema({ 
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
  },
  password_hash: {
    type: String,
    required: true,
  },
}, { versionKey: false });

module.exports = mongoose.model('User', UserSchema);
