var express = require('express');
var router = express.Router();

/* GET ice. */
router.get('/ice_', function(req, res, next) {
  res.render('ice_', {
    title: "Лед",
    picture: "public/images/ice2.jpg",
    desc: "Как мы видим на этой картинке лед."
       });
  });
  
  /* GET ice_cubes. */
router.get('/ice_cubes', function(req, res, next) {
  res.render('ice_', {
    title: "Лед",
    picture: "images/ice_.jpg",
    desc: "Как мы видим на этой картинке лед, но в другой форме."
       });
  });

  /* GET ice2. */
router.get('/ice2', function(req, res, next) {
  res.render('ice_', {
    title: "Лед",
    picture: "images/ice2.jpg",
    desc: "Как мы видим на этой картинке лед."
       });
  });

  router.get('/', function(req, res, next) {
    res.send('Новый маршрутизатор, для маршрутов, начинающихся с ice ');
  });
  
  //фигня не работает
  //Нужно исправить
  router.get("/:nick", function(req, res, next) {
    res.send(req.params.nick);
    });
    

module.exports = router;
 