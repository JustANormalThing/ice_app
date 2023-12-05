//Тоже может не работать
//Почему?
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const iceSchema = new Schema({
title: String,
nick: {
type: String,
unique: true,
required: true
},
avatar: String,
desc: String,
created:{
type:Date,
default: Date.now
}
})
module.exports = ice_ = mongoose.model('ice_', iceSchema);
