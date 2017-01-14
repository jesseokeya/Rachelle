var express = require('express');
var router = express.Router();
var User = require('../models/user.js');

// Get Homepage
router.get('/', function(req, res){
	console.log();
	res.render('home/index', {layout: false});
});

router.get('/user/home', ensureAuthenticated, function(req, res){
	console.log();
	res.render('user/user', {layout: false});
});

router.get('/directory', function(req, res){
	console.log();
	res.render('user/user');
});



function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		req.flash('error_msg','You are not logged in');
		res.redirect('/users/login');
	}
}

module.exports = router;
