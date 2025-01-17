const mongoose = require("mongoose");

const jobPostingSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contactDetails: {
    type: String,
    required: true,
  },
  positionAvailable: {
    type: String,
    required: true,
  },
  minimumExperience: {
    type: Number,
    required: true,
  },
  jobHours: {
    type: String,
    required: true,
  },
  shift: {
    type: String,
    required: true,
  },
  jobLocation: {
    type: String,
    required: true,
  },
  minimumSalary: {
    type: Number,
    required: true,
  },
  maximumSalary: {
    type: Number,
    required: true,
  },
  companyFullAddress: {
    type: String,
    required: true,
  },
  requirements: {
    type: String,
    required: true,
  },
  positionsByDepartment: {
    type: String,
    required: true,
  },
  deadline: {
    type: Date,
    required: true,
  },
  fileUpload: {
    type: String, // Assuming the file is stored as a URL or file path
  },
  termsAccepted: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });

const JobPosting = mongoose.model("JobPosting", jobPostingSchema);

module.exports = JobPosting;
