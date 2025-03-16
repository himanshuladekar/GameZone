const express = require('express');
const cors = require('cors');
const connectDB=require("./config/db.js");
const authRoutes = require('./routes/auth');
require('dotenv').config(); // Load environment variables from .env file
const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/auth', authRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
