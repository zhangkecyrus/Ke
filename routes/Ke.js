var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var user_collection = require('../models/Ke.js');



// router.get('/', function(req, res, next) {
// 	var Yue = new user_collection({ name: 'Yue Li' });
// 	Yue.save(function (err) {
// 	  if (err)
// 	  console.log('success!!!!');
// 	});	
// });

router.get('/test', function(req, res, next) {
  user_collection.find({ 'name': "Yue Li" }, function (err, result) {
    if (err) return next(err);
    res.json(result);
  });
});

// router.post('/', function(req, res, next) {
//   Ke.create(req.body, function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });
// });

// router.get('/:id', function(req, res, next) {
//   Ke.findById(req.params.id, function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });
// });

// router.put('/:id', function(req, res, next) {
//   Todo.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });
// });

// router.delete('/:id', function(req, res, next) {
//   Todo.findByIdAndRemove(req.params.id, req.body, function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });
// });



module.exports = router;