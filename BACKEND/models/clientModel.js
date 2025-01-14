const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mobile: { type: String, required: true },
  workArea: { type: String, required: true },
  companyName: { type: String, required: true },
  fullAddress: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Client', clientSchema);
