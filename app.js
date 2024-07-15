const express = require("express");
const app = express();
const morgan = require("morgan");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"));

mongoose.connection.on("error", (err) =>
  console.log(`Error connecting to MongoDB ${err.message}`)
);

// Import routes
const postRoutes = require("./routes/post");

// Middleware
app.use(morgan("dev"));

app.use("/", postRoutes);
app.listen(port, () => console.log(`listening on port ${port}!`));
