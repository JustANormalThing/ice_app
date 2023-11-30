const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

const schema = mongoose.Schema({name: String});

schema.methods.meow = function(){
    console.log(this.get("name") + " Said Somthing")
};
    
const Cat = mongoose.model('Ice_', schema);

const kitty = new Cat({name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));
kitty.meow();



