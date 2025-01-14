const Franchise = require("../models/franchiseModel");

// Create new Franchise
const createFranchise = async (req, res) => {
  try {
    const { name, email, mobile, workingArea, landmark, locality, address } =
      req.body;

    // Validate required fields
    if (
      !name ||
      !email ||
      !mobile ||
      !workingArea ||
      !landmark ||
      !locality ||
      !address
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Check if a franchise with the same email already exists
    const existingFranchise = await Franchise.findOne({ email });
    if (existingFranchise) {
      return res.status(400).json({
        success: false,
        message: "A franchise with this email already exists",
      });
    }

    // Create and save the new Franchise
    const franchise = new Franchise({
      name,
      email,
      mobile,
      workingArea,
      landmark,
      locality,
      address,
    });

    await franchise.save();

    // Send success response
    res.status(201).json({
      success: true,
      message: "Franchise created successfully",
      franchise,
    });
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({
      success: false,
      message: "An error occurred while creating the franchise",
    });
  }
};



// Get all franchises
const getFranchise = async (req, res) => {
  try {
    // Fetch all franchise records from the database
    const franchises = await Franchise.find();

    // Check if any franchises were found
    if (franchises.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No franchises found",
      });
    }

    // Send the list of franchises as a response
    res.status(200).json({
      success: true,
      data: franchises,
    });
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({
      success: false,
      message: "An error occurred while fetching the franchises",
    });
  }
};

module.exports = { createFranchise, getFranchise };

