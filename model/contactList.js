let mongoose = require('mongoose');

// create a model class
let contactModel = mongoose.Schema({
    contact_name: String,
    contact_no: Number,
    email: String
},
{
    collection: "contacts"

});

module.exports = mongoose.model('contact', contactModel)