const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: { type: String, required: "Title is required", minLength: 2 },
  content: { type: String, required: "Content is required", minLength: 2 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Post", postSchema);
