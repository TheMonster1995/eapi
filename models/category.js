const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
	cat_id: String,
	label: String,
	children: Array,
	active: Boolean,
	status: String,
	index: String,
  cafe_id: String
})

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
