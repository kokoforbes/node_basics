const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: { type: String, required: "Title is required" },
  body: { type: String, required: "Body is required" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Post", postSchema);
