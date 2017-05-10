'use strict';
//import dependency
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//create new instance of the mongoose.schema. the schema takes an 
//object that shows the shape of your database entries.
var UserSchema = new Schema({
    name: String,
    email: String,
    gender: String,
    country: String,
    technology: Array,
    profile: String,
    status:Boolean
}, {versionKey: false});
//export our module to use in server.js
module.exports = mongoose.model('UserData', UserSchema);