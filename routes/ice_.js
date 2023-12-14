var express = require('express');
var router = express.Router();
var Ice = require("../models/ice_").Ice

/* GET ice. */
//router.get('/ice_', function(req, res, next) {
  //res.render('ice_', {
   // title: "Лед",
   // picture: "public/images/ice2.jpg",
    //desc: "Как мы видим на этой картинке лед."
     //  });
 // });
  
  /* GET ice_cubes. */
//router.get('/ice_cubes', function(req, res, next) {
  //res.render('ice_', {
   // title: "Лед",
    //picture: "images/ice_.jpg",
    //desc: "Как мы видим на этой картинке лед, но в другой форме."
     //  });
 // });

  /* GET ice2. */
//router.get('/ice2', function(req, res, next) {
 // res.render('ice_', {
  //  title: "Лед",
   // picture: "images/ice2.jpg",
   // desc: "Как мы видим на этой картинке лед."
   //    });
  //});

  router.get('/', function(req, res, next) {
    res.send('Новый маршрутизатор, для маршрутов, начинающихся с ice ');
  });
  
 //Это не работает
 //Я уже несколько раз проверял
 //Как это должно работать?
 //Что это такое?
  //router.get("/:nick", function(req, res, next) {
    //res.send(req.params.nick);
    //});
    
  //router.get("/:nick", async (req, res, next) => {   
    //  try {     
    //    const Ice = await 
   // Ice.findOne({ nick: req.params.nick });     
   // console.log(Ice);     
   // if (!Ice) {       
    //  throw new Error("Нет такого льда");     
   // }     
   // res.render('ice', {       
   //   title: Ice.title,       
    //  picture: Ice.avatar,       
    //  desc: Ice.desc});   
   // } catch (err) {     
     // next(err);   
    //} 
  //});

  router.get('/:nick', async (req, res, next) => {
    try {
        const [ice, ice_] = await Promise.all([
            Ice.findOne({ nick: req.params.nick }).exec(),
            Ice.find({}, { _id: 0, title: 1, nick: 1 }).exec()
        ]);

        if (!ice_) throw new Error("Нет такого льда");

        res.render('ice_', {
            title: ice.title,
            picture: ice.avatar,
            desc: ice.desc,
            menu:ice_
        });
    } catch (err) {
         next(err);
    }
});
    
    

module.exports = router;


 