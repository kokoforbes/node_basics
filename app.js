const express = require("express");
const app = express();
const morgan = require("morgan");

const port = 3000;

// Import routes
const postRoutes = require("./routes/post");

// Middleware
app.use(morgan("dev"));

app.use("/", postRoutes);
app.listen(port, () => console.log(`listening on port ${port}!`));
