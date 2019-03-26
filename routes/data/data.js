var express = require('express');
var router = express.Router();

//var bcrypt = require('bcrypt')
var routes = require('./dataRoutes');

router.get('/data', routes.data);


module.exports = router;
