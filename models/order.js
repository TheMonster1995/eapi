const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
	order_id: String,
	order_date_time: Date,
	orders: Array,
	seen: Boolean,
	status: String,
	table: String,
  cafe_id: String
})

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
