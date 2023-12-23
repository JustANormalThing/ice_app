var mongoose = require("mongoose")
mongoose.connect('mongodb://localhost/ice_')
var User = require("./models/user.js").User
var first_user = new User({
username: "Vasya",
password: "12"
})

first_user.save().then((user) => {
    console.log(user);
  }).catch((err) => {
    throw err;
});