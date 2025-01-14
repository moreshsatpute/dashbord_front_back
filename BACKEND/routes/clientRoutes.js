const express = require("express");
const {
  createClient,
  getClients,
  updateClient,
  deletedClient,
} = require("../controllers/clientController");
const router = express.Router();

// Route to create a new client
router.post("/clients", createClient);
// Route to get all client
router.get("/clients", getClients);

// Routes to update a client by id
router.put("/clients/:id", updateClient);

// Routes to delete a client by id
router.delete("/clients", deletedClient);

module.exports = router;
