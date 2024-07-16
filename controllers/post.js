const Post = require("../models/post");

exports.getPosts = (req, res) => {
  res.json({
    posts: [
      { id: 1, title: "First Post", content: "This is the first post" },
      { id: 2, title: "Second Post", content: "This is the second post" },
    ],
  });
};

exports.createPost = (req, res) => {
  console.log(req.body);
  const { title, content } = req.body;

  const newPost = new Post({ title, content });

  newPost
    .save()
    .then((post) => res.json(post))
    .catch((err) => res.json(err));
};
