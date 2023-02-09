const mongoose = require('mongoose');

const clientSchema = mongoose.Schema({
	client_id: String,
	name: String,
	username: String,
	password: String,
	phone_number: String,
	signup_date: Date
})

const Client = mongoose.model("Client", clientSchema);

module.exports = Client;
