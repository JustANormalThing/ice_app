var express = require('express')
var router = express.Router()
var Ice_ = require("../models/ice_").Ice_
var async = require("async")
var User = require("./../models/user").User
/* GET home page. */
router.get('/', async (req, res, next) => {
       try {
        
           req.session.greeting = "Hi!!!"
           res.render('index', {
               title: 'express',
               counter:req.session.counter
               
          });
      } catch (err) {
     next(err);
     }
  });

  router.get('/logreg', async function(req, res, next) {
    res.render('logreg', { title: 'Вход',error:null}); 
  });
  

    router.post('/logreg', function(req, res, next) {
        var username = req.body.username
        var password = req.body.password
        User.findOne({username:username},function(err,user){
        if(err) return next(err)
        if(user){
        if(user.checkPassword(password)){
        req.session.user = user._id
        res.redirect('/')
        } else {
        res.render('logreg', {title: 'Вход'})
        }
        } else {
        var user = new User({username:username,password:password})
        user.save(function(err,user){
        if(err) return next(err)
        req.session.user = user._id
        res.redirect('/')
      })
      }
    })
  });


module.exports = router;