const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const upload = require("express-fileupload");

const Routes = require("./routes/Routes");
const {notFound, errorHandler} = require("./middleware/errorMiddleware");

const app = express();

// Middlewares
app.use(express.json({extended: true}));
app.use(express.urlencoded({extended: true}));
app.use(cors({credentials: true, origin: ['http://localhost:3000']}));
app.use(upload());

// Routes
app.use('/api', Routes);

// Error handlers
app.use(notFound);
app.use(errorHandler);

// Connection à MongoDB et démarrage du serveur
mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB ✅");
  
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT} 🚀`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection error", err);
  });