const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express - get' });
});
  
/* GET home page. */
router.get('/new', function(req, res, next) {
  res.render('index', { title: 'Express - get/new' });
});
/* GET home page. */
router.post('/', function(req, res, next) {
  res.render('index', { title: 'Express - User' });
});
  
/* GET home page. */
router.get('/:id', function(req, res, next) {
  res.render('index', { title: 'Express - User/id' });
});
  
/* GET home page. */
router.get('/:id/edit', function(req, res, next) {
  res.render('index', { title: 'Express - User/id/edit' });
});
  
/* GET home page. */
router.post('/:id', function(req, res, next) {
  res.render('index', { title: 'Express - User/id/show' });
});
  
/* GET home page. */
router.put('/:id', function(req, res, next) {
  res.render('index', { title: 'Express - User/id/update' });
});
/* GET home page. */
router.delete('/:id', function(req, res, next) {
  res.render('index', { title: 'Express - User/id/delete' });
});
  
module.exports = router;
  