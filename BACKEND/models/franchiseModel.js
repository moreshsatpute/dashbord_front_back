const mongoose = require('mongoose');

const franchiseSchema = new mongoose.Schema({
    name:{type:String, require:true},
    email:{type:String, require:true, unique:true},
    mobile:{type:String, require:true},
    workingArea:{type:String, require:true},
    landmark:{type:String, require:true},
    locality:{type:String, require:true},
    address:{type:String, require:true}
},{timestamps:true})
module.exports = mongoose.model('franchise',franchiseSchema)