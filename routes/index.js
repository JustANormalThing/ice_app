var express = require('express')
var router = express.Router()
var Ice_ = require("../models/ice_").Ice_
var async = require("async")
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
module.exports = router;