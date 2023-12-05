const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test1');
const ice_ = require("./models/ice_");
const ice = new ice_({
    title: "Лед",
    nick: "Ice"

});
  
  console.log(ice);
  
ice.save()
.then(function (result) {
  console.log(result);
})
.catch(function (err, result) {
  console.log(err);
});

