var express = require('express')
var router = express.Router()
var ice_ = require("../models/ice_").ice_
/* GET home page. */
router.get('/', async (req, res, next) => {
       try {
           const menu = await ice_.find({}, { _id: 0, title: 1, nick: 1 }).exec();
  
           res.render('index', {
               title: 'Express',
               menu: menu
          });
      } catch (err) {
     next(err);
     }
  });
module.exports = router;