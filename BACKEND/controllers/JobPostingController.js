const JobPosting = require("../models/JobPostingModel"); // Assuming the schema is in the models folder

// Create a new job posting
const createJobPosting = async (req, res) => {
  try {
    const {
      companyName,
      email,
      contactDetails,
      positionAvailable,
      minimumExperience,
      jobHours,
      shift,
      jobLocation,
      minimumSalary,
      maximumSalary,
      companyFullAddress,
      requirements,
      positionsByDepartment,
      deadline,
      fileUpload,
      termsAccepted,
    } = req.body;

    // Create a new job posting document
    const newJobPosting = new JobPosting({
      companyName,
      email,
      contactDetails,
      positionAvailable,
      minimumExperience,
      jobHours,
      shift,
      jobLocation,
      minimumSalary,
      maximumSalary,
      companyFullAddress,
      requirements,
      positionsByDepartment,
      deadline,
      fileUpload,
      termsAccepted,
    });

    // Save the job posting to the database
    const savedJobPosting = await newJobPosting.save();

    res.status(201).json({
      message: "Job posting created successfully.",
      jobPosting: savedJobPosting,
    });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while creating the job posting.",
      error: error.message,
    });
  }
};

// Get all job postings
const getJobPosting = async (req, res) => {
  try {
    const jobPostings = await JobPosting.find();

    res.status(200).json({
      message: "Job postings fetched successfully.",
      jobPostings,
    });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while fetching job postings.",
      error: error.message,
    });
  }
};

module.exports = {
  createJobPosting,
  getJobPosting,
};
