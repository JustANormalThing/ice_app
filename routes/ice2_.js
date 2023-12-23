const express = require('express');
const router = express.Router();
const Ice_ = require("../models/ice_").Ice_;
const async = require("async");

router.get('/:nick', async function(req, res, next) {
  try {
    const [ice_, ice2_] = await Promise.all([
      Ice_.findOne({ nick: req.params.nick }),
      Ice_.find({}, { _id: 0, title: 1, nick: 1 })
    ]);

    if (!ice_) {
      throw new Error("Нет такого");
    }

    res.render('ice_', {
      title: ice_.title,
      picture: ice_.avatar,
      desc: ice_.desc,
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;