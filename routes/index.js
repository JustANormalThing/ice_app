var express = require('express');
var router = express.Router();

/* GET ice. */
router.get('/ice_', function(req, res, next) {
  res.send("<h1>Страница ice</h1>")
  });

  /* GET ice_cubes. */
router.get('/ice_cubes', function(req, res, next) {
  res.send("<h1>Страница ice cubes</h1>")
  });

  /* GET ice2. */
router.get('/ice2', function(req, res, next) {
  res.send("<h1>Страница ice2</h1>")
  });
  

module.exports = router;
