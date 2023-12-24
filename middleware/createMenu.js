const Ice_ = require("./../models/ice_").Ice_;

module.exports = async function(req, res, next) {
  try {
    res.locals.nav = [];
    const result = await Ice_.find(null, { _id: 0, title: 1, nick: 1 });
    res.locals.nav = result;
    next();
  } catch (err) {
    throw err;
  }
};