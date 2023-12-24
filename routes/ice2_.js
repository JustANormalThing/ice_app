const express = require('express');
const router = express.Router();
//const Ice_ = require("../models/ice_").Ice_;
var checkAuth = require("./../middleware/checkAuth.js")
var db = require('../mySQLConnect.js');

const async = require("async");


router.get("/:nick", checkAuth, function(req, res, next) {
  db.query(`SELECT * FROM ices WHERE ices.nick = '${req.params.nick}'`, (err,ices) => {
  if(err) {
    console.log(err);
    if(err) return next(err)
    } else {
      if(ices.length == 0) return next(new Error("Такого льда нету"))
        var ice_ = ices[0];
        res.render('ice_', {
          title: ice_.title,
          picture: ice_.avatar,
          desc: ice_.about
  })
}
})

});

//router.get('/:nick',checkAuth, async function(req, res, next) {
  //try {
   // const [ice_, ice2_] = await Promise.all([
   //   Ice_.findOne({ nick: req.params.nick }),
   //   Ice_.find({}, { _id: 0, title: 1, nick: 1 })
   // ]);

  //  if (!ice_) {
   //   throw new Error("Нет такого");
   // }

  //  res.render('ice_', {
  //    title: ice_.title,
  //    picture: ice_.avatar,
  //    desc: ice_.desc,
  //  });
 // } catch (err) {
 //   next(err);
//  }
//});

module.exports = router;