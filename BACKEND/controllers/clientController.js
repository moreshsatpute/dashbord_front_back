const Client = require("../models/clientModel");

// Create a new client
const createClient = async (req, res) => {
  try {
    const { name, email, mobile, workArea, companyName, fullAddress } = req.body;

    // Validate required fields
    if (!name || !email || !mobile || !workArea || !companyName || !fullAddress) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if a client with the same email already exists
    const existingClient = await Client.findOne({ email });
    if (existingClient) {
      return res.status(409).json({ message: "A client with this email already exists" });
    }

    // Create and save the new client
    const client = new Client({
      name,
      email,
      mobile,
      workArea,
      companyName,
      fullAddress,
    });

    const savedClient = await client.save();
    res.status(201).json({ message: "Client created successfully", client: savedClient });
  } catch (error) {
    console.error("Error creating client:", error.message);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Get all clients
const getClients = async (req, res) => {
  try {
    const clients = await Client.find(); // Retrieve all clients from the database
    if (clients.length === 0) {
      return res.status(404).json({ message: "No clients found" });
    }
    res.status(200).json(clients);
  } catch (error) {
    console.error("Error fetching clients:", error.message);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Update a client by ID
const updateClient = async (req, res) => {
  try {
    console.log("Request Params:", req.params);
    console.log("Request Body:", req.body);

    const updateClient = await Client.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updateClient) {
      return res.status(404).json({ message: "Client not found" });
    }
    res.status(200).json({ message: "Client updated successfully", updateClient });
  } catch (error) {
    res.status(500).json({ message: "Error updating client", error });
  }
};

// Delete a client by ID
const deletedClient = async (req, res) => {
  try {
    const deletedClient = await Client.findByIdAndDelete(req.params.id);
    if (!deletedClient) {
      return res.status(404).json({ message: "Client not found" });
    }
    res.status(200).json({ message: "Client deleted successfully", deletedClient });
  } catch (error) {
    res.status(500).json({ message: "Error deleting client", error });
  }
};

// Export the functions
module.exports = { createClient, getClients, updateClient, deletedClient };
