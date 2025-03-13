const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    fathername: String,
    mothername: String,
    dob: Date,
    mob: String,
    email: String,
    address: String
});

module.exports = mongoose.model('User', userSchema);
