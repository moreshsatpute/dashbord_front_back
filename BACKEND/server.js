const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); // Make sure this path is correct for your setup
const clientRoutes = require('./routes/clientRoutes'); // Correct spelling: clientRoutes
const franchiseRoutes=require('./routes/franchiseRoutes')
const JobPostingRoutes=require('./routes/JobPostingRoutes')
const cors = require('cors');

dotenv.config();

// Initialize Express app
const app = express();

// Connect to database
connectDB();

// Enable CORS - Allow only frontend domain
app.use(cors({ origin: 'http://localhost:3000' })); // Replace with your frontend's URL
console.log('CORS middleware initialized');

// Parse JSON requests
app.use(express.json());
console.log('Express JSON parser middleware initialized');

// Client routes
app.use('/api', clientRoutes);
console.log('Client routes loaded');

// Client routes
app.use('/api',franchiseRoutes)
console.log('franchise routes loaded');

// Job Posting Form
app.use('/api', JobPostingRoutes)
console.log('Job Posting Form routes loaded');


// Base route
app.get('/', (req, res) => {
  console.log('Base route accessed');
  res.send('API is running...');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
