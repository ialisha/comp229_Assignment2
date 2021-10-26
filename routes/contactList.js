let express = require('express');
let router = express.Router();
let mongoose =  require('mongoose');
let passport=require('passport');
//create a refernce to model
let contactListController = require('../controllers/contactList');

function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}


/* GET Route for the contact list page - READ operation */
router.get('/',requireAuth,contactListController.displayContactList);

/* GET Route for displaying the Edit Page - UPDATE operation */
router.get('/edit/:id',requireAuth,contactListController.displayEditPage);

/* POST Route for displaying the Edit Page - UPDATE operation */
router.post('/edit/:id',requireAuth,contactListController.processEditPage);

/* GET to perform Deletion - DELETE operation */
router.get('/delete/:id',requireAuth,contactListController.performDelete);

module.exports = router;