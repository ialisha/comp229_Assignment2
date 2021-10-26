var express = require('express');
var router = express.Router();

let indexController = require('../controllers/index')

/* GET home page. */
router.get('/', indexController.displayHomePage);
/* GET about me page. */
router.get('/about', indexController.displayAboutmePage);
/* GET projects page. */
router.get('/projects', indexController.displayProjectsPage);
/* GET services page. */
router.get('/services', indexController.displayServicesPage);
/* GET contact me page. */
router.get('/contactme', indexController.displayContactmePage);
/* GET Route for displaying the Login page. */
router.get('/login', indexController.displalyLoginPage);
/* POST Route for processing the Login page. */
router.post('/login', indexController.processLoginPage);
/* GET to perform perform UserLogout. */
router.get('/logout', indexController.performLogout);

module.exports = router;