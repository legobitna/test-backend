const mongoose = require("mongoose");

const leadSchema = mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  location_type: { type: String, required: true },
  location_string: { type: String, required: true },
  communication: { type: String },
});
const Lead = mongoose.model("Lead", leadSchema);
module.exports = Lead;
