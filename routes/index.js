var express = require('express')
var router = express.Router()
var Ice_ = require("../models/ice_").Ice_
var async = require("async")
/* GET home page. */
router.get('/', async (req, res, next) => {
       try {
        
           const menu = await Ice_.find({}, { _id: 0, title: 1, nick: 1 }).exec();
  
           res.render('index', {
               title: 'express',
               menu: menu

               
          });
      } catch (err) {
     next(err);
     }
  });
module.exports = router;