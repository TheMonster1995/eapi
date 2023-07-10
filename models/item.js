const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
	item_id: String,
	label: String,
	desc: String,
	price: String,
	img: String,
	cat_label: String,
	cat: String,
	active: Boolean,
	status: String,
	index: String,
  cafe_id: String,
	item_img: String,
})

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
