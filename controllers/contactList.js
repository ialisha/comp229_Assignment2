let express = require('express');
let router = express.Router();
let mongoose =  require('mongoose');

//create a refernce to model
let Contact = require('../model/contactList');

module.exports.displayContactList = (req, res, next) => {
    Contact.find((err, contactList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(ContactList);
            res.render('businessContactList/list', {title: 'contacts', ContactList: contactList, 
            displayName: req.user ? req.user.displayName : ''});
        }
    });
}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Contact.findById(id, (err, contactToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // show the edit view
            res.render('businessContactList/edit', {title:'Edit Contact', contact: contactToEdit,
            displayName: req.user ? req.user.displayName : ''})
        }
    });

}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updateContact = Contact({
        "_id": id,
        "contact_name": req.body.contact_name,
        "contact_no": req.body.contact_no,
        "email": req.body.email
    });

    Contact.updateOne({_id: id}, updateContact, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh contact list
            res.redirect('/contact-list');
        }
    });
    
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Contact.remove({_id: id}, (err) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh contact list
            res.redirect('/contact-list');
        }
    });
        
}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Contact.findById(id, (err, contactToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // show the edit view
            res.render('businessContactList/edit', {title:'Edit Contact', contact: contactToEdit,
            displayName: req.user ? req.user.displayName : ''})
        }
    });

}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updateContact = Contact({
        "_id": id,
        "contact_name": req.body.contact_name,
        "contact_no": req.body.contact_no,
        "email": req.body.email
    });

    Contact.updateOne({_id: id}, updateContact, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh contact list
            res.redirect('/contact-list');
        }
    });
    
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Contact.remove({_id: id}, (err) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh contact list
            res.redirect('/contact-list');
        }
    });
        
}