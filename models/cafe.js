const mongoose = require('mongoose');

const cafeSchema = mongoose.Schema({
	cafe_id: String,
	name: String,
	address: String,
	phone: String,
	location: String,
	admin: String,
  img: String,
  counterActive: Boolean,
	signup_date: Date
})

const Cafe = mongoose.model("Cafe", cafeSchema);

module.exports = Cafe;
