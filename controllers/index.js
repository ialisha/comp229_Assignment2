let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

//create the User Model instance
let userModel = require('../model/user');
let User = userModel.User; //alias

module.exports.displayHomePage = (req, res, next) => {
    res.render('home', {title: 'Home', displayName: req.user ? req.user.displayName : ''});
}

module.exports.displayAboutmePage = (req, res, next) => {
    res.render('about', {title: 'About', displayName: req.user ? req.user.displayName : ''});
}

module.exports.displayProjectsPage = (req, res, next) => {
    res.render('projects', {title: 'Projects', displayName: req.user ? req.user.displayName : ''});
}

module.exports.displayServicesPage = (req, res, next) => {
    res.render('services', {title: 'Services', displayName: req.user ? req.user.displayName : ''});
}

module.exports.displayContactmePage = (req, res, next) => {
    res.render('contactme', {title: 'Contact Me', displayName: req.user ? req.user.displayName : ''});
}

module.exports.displalyLoginPage = (req, res, next) => {
    //check if the user is already logged in
    if(!req.user)
    {
        res.render('auth/login',
        {
            title: "Login",
            messages: req.user ? req.user.displayName : ''
        })
    }
    else
    {
        return res.redirect('/');
    }
}


module.exports.processLoginPage = (req, res, next) => {
    passport.authenticate('local',
    (err, user, info) => {
        // server err?
        if(err)
        {
            return next(err);
        }
        // is there a user login error?
        if(!user)
        {
            req.flash('loginMessage', 'Authentication Error');
            return res.redirect('/login');
        }
        req.login(user, (err) => {
            // server error?
            if(err)
            {
                return next(err);
            }
            return res.redirect('/contact-list');
        });
    })(req, res, next);
}
module.exports.displayRegisterPage = (req, res, next) => {
    // check if the user is not already logged in
    if(!req.user)
    {
        res.render('auth/register',
        {
            title: 'Register',
            messages: req.flash('registerMessage'),
            displayName: req.user ? req.user.displayName : ''
        });
    }
    else
    {
        return res.redirect('/');
    }
}
       
module.exports.performLogout = (req, res, next) => {
    req.logout();
    res.redirect('/');
}